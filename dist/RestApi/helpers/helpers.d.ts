import { EndpointProps } from '../Endpoint/Endpoint';
export declare const handleError: (res: Response) => Promise<Response>;
export declare const handleJson: (res: Response) => Promise<any>;
export declare const replaceUrlParams: (url: string, params: EndpointProps["urlParams"]) => string;
export declare const buildUrl: (url: string, urlParams?: EndpointProps["urlParams"], baseUrl?: string) => string;
