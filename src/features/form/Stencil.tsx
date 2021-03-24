import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addField } from "./field-slice";
import { Field, FieldTypes } from "./model/Field";

interface StencilProps {}

const Stencil: FC<StencilProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      items
      <div
        onClick={() => {
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
              field: new Field({ title: "numberField", type: FieldTypes.Number }),
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
