import type { Request, Response } from 'express';
import { parseQueryBool, parseQueryString, res400Obj, res500Obj, resOkObj } from './utils';
import { isValidAddress } from '../utils/string';
import { isValidStoneWalletAddress } from '../fetch/stone_wallet/stone_wallet';
import { createAccessToken } from '../fetch/sumsub/sumsub';

export async function createAccessTokenProcessor(req: Request, res: Response) {
  const postData = req.body;

  const address: string | null = parseQueryString(postData?.walletAddress, isValidAddress);
  const email: string | null = parseQueryString(postData?.email);
  const isTest: boolean = parseQueryBool(postData?.isTest) || false;

  if (!address) {
    return res400Obj(res);
  }

  const isValid: boolean = await isValidStoneWalletAddress(address, isTest);
  if (!isValid) {
    return res400Obj(res, 'invalid stone wallet address');
  }

  const walletAddress: string = address.toLowerCase();

  const accessTokenRes = await createAccessToken(walletAddress, process.env.SUMSUB_LEVEL_NAME!, 600, email);

  if (accessTokenRes.isOK) {
    return resOkObj(res, { token: accessTokenRes.token, address: accessTokenRes.userId });
  } else {
    accessTokenRes.errorInfo;
    return res500Obj(res, `failed to create access token: ${accessTokenRes.errorInfo}`);
  }
}
