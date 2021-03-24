import React, { FC } from "react";
import FormRenderer from "./FormRenderer";
import Inspector from "./Inspector";
import Stencil from "./Stencil";

interface FormContainerProps {}

const FormContainer: FC<FormContainerProps> = (props) => {
  return (
    <div>
      FormContainer
      <Stencil />
      <FormRenderer />
      <Inspector />
    </div>
  );
};

export default FormContainer;
