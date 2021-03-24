import React, { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { editField, useFieldState, useSelectedField } from "./field-slice";

interface InspectorCommonProps {}

const InspectorCommon: FC<InspectorCommonProps> = (props) => {
  const selectedField = useSelectedField();
  const field = useFieldState(selectedField!.id);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedField) return;
    dispatch(
      editField({
        id: selectedField.id,
        title: e.target.value,
      })
    );
  };

  return (
    <div>
      Text --- {field.id}
      <input
        type="text"
        placeholder="title"
        value={field.title}
        onChange={handleChange}
      />
    </div>
  );
};

export default InspectorCommon;
