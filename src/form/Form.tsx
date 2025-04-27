import { FC, useActionState } from 'react';
import Text from '@/components/Text';
import Button from '@/components/Button';


interface Field {
  name: string;
  label: string;
  type: 'text-field' | 'default';
  options: any;
}

export interface Props {
  onSubmit: Promise<unknown>;
  fields: Field[]
  loading?: boolean;
  error: string;
  componentMap: Record<Field['type'], FC<{label: string}>>;
}

const Form: FC<Props> = ({onSubmit, fields, componentMap}) => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await onSubmit(formData.get("name"));
      if (error) {
        return error;
      }

      return null;
    },
    null,
  );
  return (
    <form action={{submitAction}}>
      
      {fields.map((field,i) => {
        const Component = componentMap[field.type] ?? componentMap['default'];
        
        return <Component key={i} label={field.label} {...field.options} />;
      })}

      {error && <Text color="error" >{error}</Text>}

      <Button loading={isPending} fullWidth size="large" type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
}

export default Form;