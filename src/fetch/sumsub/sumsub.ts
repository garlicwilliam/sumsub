import axios, { AxiosResponse } from 'axios';
import { AccessTokenResponse, RequestConfig } from './types';
import { createSignature } from './auth_sign';

const baseURL: string = process.env.SUMSUB_API_BASE_URL || 'https://api.sumsub.com';

export async function sumsubFetch<T = any>(
  method: 'GET' | 'POST',
  path: string,
  data: string,
): Promise<AxiosResponse<T>> {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-App-Token': process.env.SUMSUB_APP_TOKEN,
  };

  let config: RequestConfig = {
    method: method,
    baseURL: baseURL,
    url: path,
    headers: headers,
    data: data,
  };

  config = createSignature(config);

  return await axios(config);
}

/**
 *
 * @param extUserId - wallet address lower case
 * @param levelName - sumsub level name
 * @param ttlInSecs - seconds before the token expires, default 600 (10 mins)
 * @param email - optional email to link the token to, for better traceability in Sumsub dashboard
 */
export async function createAccessToken(
  extUserId: string,
  levelName: string,
  ttlInSecs: number = 600,
  email?: string,
): Promise<AccessTokenResponse> {
  let body: any = {
    userId: extUserId,
    levelName: levelName,
    ttlInSecs: ttlInSecs,
  };

  if (email) {
    body.applicantIdentifiers = {
      email: email,
    };
  }

  const data: string = JSON.stringify(body);
  const method = 'POST';
  const path: string = '/resources/accessTokens/sdk';

  const res = await sumsubFetch(method, path, data);

  const resData = res.data;
  const httpOk: boolean = res.status >= 200 && res.status < 300;

  if (!httpOk) {
    throw new Error(`Sumsub API error: ${res.status} ${res.statusText} - ${JSON.stringify(resData)}`);
  }

  if (resData.token) {
    return {
      isOK: true,
      token: resData.token,
      userId: resData.userId,
    };
  } else {
    return {
      isOK: false,
      token: '',
      userId: '',
      errorInfo: resData.description,
    };
  }
}
