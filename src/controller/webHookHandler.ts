import type { Request, Response } from 'express';
import crypto from 'crypto';
import { SumSubWebHookType } from '../types/sumsub_webhook';
import {
  confirmUserKycStatus,
  updateUserKycStatusByOnHold,
  updateUserKycStatusByPending,
  updateUserKycStatusByReset,
  updateUserKycStatusByReview,
} from '../services/user_kyc_status';
import { insertUserKycLog } from '../services/user_kyc_logs';
import { prismaClient } from '../prisma';

function checkDigitalSignature(req: Request): boolean {
  const algo = req.headers['x-payload-digest-alg'];
  const digest = req.headers['x-payload-digest'];
  const data: string = (req as any)['rawBody'];

  if (!algo || !digest || !process.env.SUMSUB_WEBHOOK_SECRET) {
    return false;
  }

  const algoKey: string = algo.toString();
  const algorithms: any = {
    HMAC_SHA1_HEX: 'sha1',
    HMAC_SHA256_HEX: 'sha256',
    HMAC_SHA512_HEX: 'sha512',
  }[algoKey];

  const computeDigest = crypto.createHmac(algorithms, process.env.SUMSUB_WEBHOOK_SECRET!).update(data).digest('hex');

  return computeDigest === digest.toString();
}

export async function webHookHandler(req: Request, res: Response) {
  const isCheck: boolean = process.env.ENV === 'prod' ? checkDigitalSignature(req) : true;
  if (!isCheck) {
    return res.status(400).end();
  }

  const hook = req.body;
  if (!hook || !hook.type) {
    return res.status(400).end();
  }

  const hookType: SumSubWebHookType = hook.type;

  try {
    await prismaClient.$transaction(async (tx) => {
      switch (hookType) {
        case 'applicantCreated': {
          await confirmUserKycStatus(hook, tx);
          await insertUserKycLog(hook, tx);
          break;
        }
        case 'applicantPending': {
          await updateUserKycStatusByPending(hook, tx);
          await insertUserKycLog(hook, tx);
          break;
        }
        case 'applicantOnHold': {
          await updateUserKycStatusByOnHold(hook, tx);
          await insertUserKycLog(hook, tx);

          break;
        }
        case 'applicantReviewed': {
          await updateUserKycStatusByReview(hook, tx);
          await insertUserKycLog(hook, tx);

          break;
        }
        case 'applicantReset': {
          await updateUserKycStatusByReset(hook, tx);
          await insertUserKycLog(hook, tx);

          break;
        }
        default: {
          console.log(`Unhandled webhook type: ${hookType}`);
        }
      }
    });

    res.status(200).end();
  } catch (error) {
    console.error({ error });
    res.status(500).end();
  }
}
