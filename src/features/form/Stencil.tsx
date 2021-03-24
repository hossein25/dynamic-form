import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addField, editField, useSelectedField } from "./field-slice";
import { Field, FieldTypes } from "./model/Field";

interface StencilProps {}

const Stencil: FC<StencilProps> = (props) => {
  const dispatch = useAppDispatch();
  const selectedField = useSelectedField();

  return (
    <div>
      items
      <div
        onClick={() => {
          dispatch(
            addField({
              field: new Field({ title: "row", type: FieldTypes.Row }),
            })
          );
        }}
      >
        Row
      </div>
      <div
        onClick={() => {
          if (selectedField?.type === FieldTypes.Row) {
            const newColumn = new Field({
              title: "Column",
              type: FieldTypes.Column,
            });
            dispatch(addField({ field: newColumn }));
            dispatch(
              editField({
                id: selectedField.id,
                fieldIds: [...selectedField.fieldIds, newColumn.id],
              })
            );
            return;
          }
          dispatch(
            addField({
              field: new Field({ title: "Column", type: FieldTypes.Column }),
            })
          );
        }}
      >
        Column
      </div>
      <div
        onClick={() => {
          if (selectedField?.type === FieldTypes.Column) {
            const newField = new Field({ title: "textField", type: FieldTypes.Text });
            dispatch(addField({ field: newField }));
            dispatch(
              editField({
                id: selectedField.id,
                fieldIds: [...selectedField.fieldIds, newField.id],
              })
            );
            return;
          }
          dispatch(
            addField({
              field: new Field({ title: "textField", type: FieldTypes.Text }),
            })
          );
        }}
      >
        textField
      </div>
      <div
        onClick={() => {
          dispatch(
            addField({
              field: new Field({
                title: "numberField",
                type: FieldTypes.Number,
              }),
            })
          );
        }}
      >
        numberField
      </div>
    </div>
  );
};

export default Stencil;
