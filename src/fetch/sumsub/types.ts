import { AxiosHeaders, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export type RequestConfig = AxiosRequestConfig & {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  headers: AxiosHeaders | RawAxiosRequestHeaders;
  data: string;
};

export type AccessTokenResponse = {
  isOK: boolean;
  token: string;
  userId: string;
  errorInfo?: string;
};
