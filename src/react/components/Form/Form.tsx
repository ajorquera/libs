import { FC, useActionState } from 'react';
import Text from '@/react/components/Text';
import Button from '@/react/components/Button';
import { Field } from './types';
import { formAction, getStateFromFields } from './helpers';

export interface Props {
  onSubmit: (...args: any[]) => Promise<unknown>;
  fields: Field[]
  loading?: boolean;
  error: string;
  componentMap: Record<Field['type'], FC<{label?: string}>>;
}


const Form: FC<Props> = ({onSubmit, error: externalError, fields, componentMap}) => {
  const [
    validationErrors, 
    action, 
    loading
  ] = useActionState<Record<string, any>, FormData>(formAction(onSubmit), getStateFromFields(fields, '') );
  
  const error = externalError || Object.values(validationErrors).pop();

  return (
    <form action={action}>
      
      {fields.map((field,i) => {
        const Component = componentMap[field.type] ?? componentMap['default'];
        
        return <Component key={i} label={field.label} {...field.options} />;
      })}

      {error && <Text>{error}</Text>}

      <Button type="submit">
        {loading ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  );
}

export default Form;