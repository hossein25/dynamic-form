import { nanoid } from "@reduxjs/toolkit";

export class FormDesign {}

export enum FieldTypes {
  Text = "text",
  Number = "number",
}

export class Field {
  id: string;
  title: string;
  fieldIds: string[];
  parentId: string;
  type: FieldTypes;
  constructor(props: Partial<Field>) {
    this.id = nanoid();
    this.title = props.title ?? "";
    this.fieldIds = props.fieldIds ?? [];
    this.parentId = props.parentId ?? "";
    this.type = props.type ?? FieldTypes.Text;
  }
}
