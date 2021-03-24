import React, { FC } from "react";
import { useSelectedField } from "./field-slice";
import InspectorCommon from "./InspectorCommon";
import { FieldTypes } from "./model/Field";

interface InspectorProps {}

const Inspector: FC<InspectorProps> = (props) => {
  const selectedFields = useSelectedField();

  if (!selectedFields) {
    return null;
  }

  return (
    <div style={{ margin: 16 }}>
      Inspector
      <InspectorCommon />
      {/* {selectedFields.type === FieldTypes.Text && <InspectorCommon />} */}
    </div>
  );
};

export default Inspector;
