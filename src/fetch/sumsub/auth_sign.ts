import * as crypto from 'crypto';
import { RequestConfig } from './types';

export function createSignature(config: RequestConfig): RequestConfig {
  const ts: number = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256', process.env.SUMSUB_SECRET_KEY as string);
  signature.update(ts + (config.method || '').toUpperCase() + config.url);
  signature.update(config.data);

  config.headers['X-App-Access-Ts'] = ts.toString();
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
}
