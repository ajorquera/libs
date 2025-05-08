type transFn<T> = (x: any) => T;
export declare function pipe<T = any>(...fns: transFn<T>[]): (x: any) => T;
export {};
