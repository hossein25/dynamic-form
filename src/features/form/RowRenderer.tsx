import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getFieldChildrens } from "../../utils/getFieldChildrens";
import ColumnRenderer from "./ColumnRenderer";
import { selectField, useFieldsState, useSelectedField } from "./field-slice";
import { Field, FieldTypes } from "./model/Field";

interface RowRendererProps {
  fields: Record<string, Field>;
}

const RowRenderer: FC<RowRendererProps> = ({ fields }) => {
  const dispatch = useAppDispatch();
  const selectedField = useSelectedField();
  const allFields = useFieldsState();

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
          {field.type === FieldTypes.Column && (
            <div style={{ border: "1px solid blue" }}>
              Column
              {field.fieldIds.length > 0 && (
                <div>
                  <ColumnRenderer fields={getFieldChildrens(allFields, field.fieldIds)} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RowRenderer;