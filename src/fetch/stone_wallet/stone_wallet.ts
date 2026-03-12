import axios from 'axios';
import { isValidAddress } from '../../utils/string';

export async function isValidStoneWalletAddress(address: string, isTestEvn: boolean): Promise<boolean> {
  const baseURL: string = isTestEvn ? process.env.STONE_WALLET_API_TEST! : process.env.STONE_WALLET_API_PROD!;
  const path: string = `/api/invites/lookup/${address.toLowerCase()}`;

  const config = {
    baseURL: baseURL,
    url: path,
    method: 'GET',
  };

  const res = await axios(config);
  if (res.status === 200 && res.data.success) {
    const body = res.data;
    const addr: string | undefined = body?.data?.user?.walletAddress;

    return isValidAddress(addr);
  }

  return false;
}
