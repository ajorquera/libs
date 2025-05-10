import { TObj } from '@/types';
import { buildUrl, handleError, handleJson } from './helpers';

export interface FetchProps {
  url       : string
  urlParams?: TObj<string>
  baseUrl?  : string
  method?   : string
  headers?  : Record<string, string>
  body?     : Record<string, string>
}

/**
 * Wrapper around fetch that handles JSON and errors
 */
const fetcher = ({ url, urlParams, baseUrl, ...fetchProps }: FetchProps) => {
  const fullUrl = buildUrl(url, urlParams, baseUrl);

  const { body, method, headers } = fetchProps;
  const promise = fetch(fullUrl, {
    body   : typeof body !== 'string' ? JSON.stringify(body) : body,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method
  }).then(handleError).then(handleJson);

  return promise;
};

export const get  = (props: FetchProps) => fetcher({ ...props, method: 'GET' });
export const post = (props: FetchProps) => fetcher({ ...props, method: 'POST' });
export const put  = (props: FetchProps) => fetcher({ ...props, method: 'PUT' });
export const del  = (props: FetchProps) => fetcher({ ...props, method: 'DELETE' });

export default fetcher;
