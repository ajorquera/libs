export const pipe = (...fns: any[]) => (x: any) => fns.reduce((v, f) => f(v), x);
export const copyObjSpread = (obj:any) => ({ ...obj }); 
