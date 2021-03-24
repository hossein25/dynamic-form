import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeFormData, useFieldValue } from "./field-slice";
import { Field } from "./model/Field";

interface FieldRendererProps {
  field: Field;
}

const FieldRenderer: FC<FieldRendererProps> = ({ field }) => {
  const value = useFieldValue(field.id) ?? '';
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <label htmlFor={field.id}>{field.title}</label>
      <input
        type={field.type}
        id={field.id}
        placeholder={field.title}
        value={value as string}
        onChange={({ target }) => {
          dispatch(changeFormData({ id: field.id, value: target.value }));
        }}
      />
    </React.Fragment>
  );
};

export default FieldRenderer;
