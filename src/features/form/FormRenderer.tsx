import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { selectField, useFieldsState } from "./field-slice";

interface FormRendererProps {}

const FormRenderer: FC<FormRendererProps> = (props) => {
  const fields = useFieldsState();
  const dispatch = useAppDispatch();

  return (
    <div style={{ margin: 16 }}>
      FormRenderer
      {Object.entries(fields).map(([key, field]) => (
        <div
          key={key}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectField({ id: key }));
          }}
        >
          <input type={field.type} placeholder={field.title} />
        </div>
      ))}
    </div>
  );
};

export default FormRenderer;
