import type { Request, Response } from 'express';
import { parseQueryString, res400Obj, resOkObj } from './utils';
import { isValidAddress } from '../utils/string';
import { queryUserKycStatusByAddress } from '../services/user_kyc_status';
import { UserKycStatusRes } from '../types/user_kyc_status';

export async function userStatusGetter(req: Request, res: Response) {
  const address: string | null = parseQueryString(req.query.user);
  if (!address) {
    return res400Obj(res);
  }

  if (!isValidAddress(address)) {
    return res400Obj(res);
  }

  const userAddress = address.toLowerCase();
  const status = await queryUserKycStatusByAddress(userAddress);
  if (!status) {
    const statusRes: UserKycStatusRes = {
      userAddress: address,
      reviewStatus: 'none',
      reviewAnswer: '',
      rejectedType: '',
    };

    return resOkObj(res, statusRes);
  } else {
    const statusRes: UserKycStatusRes = {
      userAddress: status.userAddress,
      reviewStatus: status.reviewStatus,
      reviewAnswer: status.reviewAnswer,
      rejectedType: status.rejectedType,
    };

    return resOkObj(res, statusRes);
  }
}
