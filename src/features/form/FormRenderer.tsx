import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getFieldChildrens } from "../../utils/getFieldChildrens";
import { selectField, useFieldsState, useSelectedField } from "./field-slice";
import { FieldTypes } from "./model/Field";
import RowRenderer from "./RowRenderer";

interface FormRendererProps {}

const FormRenderer: FC<FormRendererProps> = () => {
  const fields = useFieldsState();
  const dispatch = useAppDispatch();
  const selectedField = useSelectedField();

  return (
    <div style={{ margin: 16 }}>
      {Object.entries(fields).map(([key, field]) => (
        <div
          style={{
            border: selectedField?.id === key ? "3px dashed green" : "none",
            padding: 8,
          }}
          key={key}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectField({ id: key }));
          }}
        >
          {field.type === FieldTypes.Row && (
            <div style={{ border: "1px solid red" }}>
              Row
              {field.fieldIds.length > 0 && (
                <div>
                  <RowRenderer fields={getFieldChildrens(fields, field.fieldIds)} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormRenderer;