type transFn<T> = (x: any) => T;

export function pipe<T=any>(...fns: transFn<T>[]) {  
  return (x: any) => fns.reduce<T>((v, f) => f(v), x);
}
