import { Field } from "../features/form/model/Field";

export const getFieldChildrens = (fields: Record<string, Field>, fieldIds: string[]) => {
  const data: Record<string, Field> = {};
  for (const fieldId of fieldIds) {
    data[fieldId] = fields[fieldId];
  }
  return data;
};
