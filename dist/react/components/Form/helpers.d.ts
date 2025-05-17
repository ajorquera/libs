import { Field } from './types';
export declare const getStateFromFields: (fields: Field[], initialValue?: number | string | null) => Record<string, string | number | null>;
export declare const formAction: (onSubmit: any) => (_: unknown, formData: FormData) => Promise<void>;
