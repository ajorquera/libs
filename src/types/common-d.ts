// @deprecated
export interface TObj<T=unknown> {
  [key: string]: T | undefined;
}

export type Dict<T=unknown> = {
  [key: string]: T | undefined;
};