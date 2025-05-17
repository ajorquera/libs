import { Dict } from '../../../types';
export interface FetchProps {
    url: string;
    urlParams?: Dict<string>;
    baseUrl?: string;
    method?: string;
    headers?: Record<string, string>;
    body?: Record<string, string>;
}
/**
 * Wrapper around fetch that handles JSON and errors
 */
declare const fetcher: ({ url, urlParams, baseUrl, ...fetchProps }: FetchProps) => Promise<any>;
export declare const get: (props: FetchProps) => Promise<any>;
export declare const post: (props: FetchProps) => Promise<any>;
export declare const put: (props: FetchProps) => Promise<any>;
export declare const del: (props: FetchProps) => Promise<any>;
export default fetcher;
