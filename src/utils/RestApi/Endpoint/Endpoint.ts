import { Dict } from '@/types';

import fetcher, { type FetchProps } from '../helpers/fetcher';

export interface EndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url       : string
  urlParams?: Dict<string | number>
  baseUrl?  : string
}

/**
 * Endpoint class to handle API requests
 * @class Endpoint
 * @param {Partial<EndpointProps>} config - Configuration for the endpoint
 */
class Endpoint {

  constructor (public config?: Partial<EndpointProps>) {
    this.config = config ?? { url: '' };
  }

  read   = this.get;
  create = this.post;
  update = this.put;
  remove = this.delete;

  get (urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>) {
    const props = Object.assign({}, this.config, config, { method: 'GET', urlParams });
    return fetcher(props as FetchProps);
  }

  post <T=unknown>(body: Dict<T>, urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>) {
    const props = Object.assign({}, this.config, config, { method: 'POST', body: JSON.stringify(body), urlParams }) as unknown as FetchProps;
    return fetcher(props);
  }

  put <T=unknown>(body: Dict<T>, urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>) {
    const props = Object.assign({}, this.config, config, { method: 'PUT', body: JSON.stringify(body), urlParams }) as unknown as FetchProps;
    return fetcher(props);
  }

  delete (urlParams?: EndpointProps['urlParams'], config?: Partial<EndpointProps & FetchProps>) {
    const props = Object.assign({}, this.config, config, { method: 'DELETE', urlParams }) as unknown as FetchProps;
    return fetcher(props);
  }
}

export default Endpoint;
