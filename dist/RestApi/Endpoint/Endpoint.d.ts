import { TObj } from '../../types';
import { FetchProps } from '../helpers/fetcher';
export interface EndpointProps {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    urlParams?: TObj<string | number>;
    baseUrl?: string;
}
/**
 * Endpoint class to handle API requests
 * @class Endpoint
 * @param {Partial<EndpointProps>} config - Configuration for the endpoint
 */
declare class Endpoint {
    config?: Partial<EndpointProps> | undefined;
    constructor(config?: Partial<EndpointProps> | undefined);
    read: (urlParams?: EndpointProps["urlParams"], config?: Partial<EndpointProps & FetchProps>) => Promise<any>;
    create: <T = unknown>(body: TObj<T>, urlParams?: EndpointProps["urlParams"], config?: Partial<EndpointProps & FetchProps>) => Promise<any>;
    update: <T = unknown>(body: TObj<T>, urlParams?: EndpointProps["urlParams"], config?: Partial<EndpointProps & FetchProps>) => Promise<any>;
    remove: (urlParams?: EndpointProps["urlParams"], config?: Partial<EndpointProps & FetchProps>) => Promise<any>;
    get(urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>): Promise<any>;
    post<T = unknown>(body: TObj<T>, urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>): Promise<any>;
    put<T = unknown>(body: TObj<T>, urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>): Promise<any>;
    delete(urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>): Promise<any>;
}
export default Endpoint;
