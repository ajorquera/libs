export const pipe = (...fns: unknown[]) => (x: unknown) => fns.reduce((v, f) => f(v), x);
