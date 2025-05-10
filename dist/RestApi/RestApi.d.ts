import { default as Endpoint, EndpointProps } from './Endpoint/Endpoint';
type NameEndpoint = {
    name: string;
} & EndpointProps;
export default class RestApi {
    private readonly _endpoints;
    constructor(endpoints?: NameEndpoint[], config?: Partial<EndpointProps>);
    add(name: string, props: EndpointProps): void;
    remove(name: string): void;
    get(name: string): Endpoint | undefined;
}
export {};
