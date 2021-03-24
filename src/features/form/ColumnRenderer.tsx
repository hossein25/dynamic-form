import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { selectField, useSelectedField } from "./field-slice";
import FieldRenderer from "./FieldRenderer";
import { Field, FieldTypes } from "./model/Field";

interface ColumnRendererProps {
  fields: Record<string, Field>;
}

const ColumnRenderer: FC<ColumnRendererProps> = ({ fields }) => {
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
          {[FieldTypes.Text, FieldTypes.Number].includes(field.type) && (
              <FieldRenderer {...{field}} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ColumnRenderer;
