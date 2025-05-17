import Endpoint, {EndpointProps} from './Endpoint/Endpoint';

type NameEndpoint = {name: string} & EndpointProps;

export default class RestApi {
  private readonly _endpoints: Map<string, Endpoint>;

  constructor (endpoints: NameEndpoint[] = [], config?: Partial<EndpointProps>) {
    this._endpoints = new Map<string, Endpoint>(endpoints.map(endpoint => {
      const {name, ...props} = endpoint;
      const mergeProps = Object.assign({}, props, config) as EndpointProps;
      return [name, new Endpoint(mergeProps)];
    }));
  }

  add (name: string, props: EndpointProps) {
    const endpoint = new Endpoint(props);
    this._endpoints.set(name, endpoint);
  }

  remove (name: string) {
    this._endpoints.delete(name);
  }

  get (name: string) {
    return this._endpoints.get(name);
  }
}
