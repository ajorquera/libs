import { Field } from "./types";

export const getStateFromFields = (fields: Field[], initialValue?: number | string | null) => {
  return fields.reduce<Record<string, string | number | null>>((acc, field) => {
    acc[field.name] = initialValue ?? field.value ?? '';
    return acc;
  }
  , {});
}

export const formAction = (onSubmit: any) =>  async (_: unknown, formData: FormData) => {
  const state = Object.fromEntries(formData.entries());
  
  
  onSubmit(state);

}