export interface Field<T = string> {
    name: string;
    label?: string;
    value?: string;
    type: T;
    options: Record<string, unknown>;
}
