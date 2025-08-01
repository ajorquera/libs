import { FC } from 'react';
import { Field } from './types';
export interface Props {
    onSubmit: (...args: any[]) => Promise<unknown>;
    fields: Field[];
    loading?: boolean;
    error: string;
    componentMap: Record<Field["type"], FC<{
        label?: string;
    }>>;
}
declare const Form: FC<Props>;
export default Form;
