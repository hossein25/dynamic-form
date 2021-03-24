import { Field } from "./model/Field";

export interface IAddFieldAction {
  field: Field;
}

export interface IEditFieldAction extends Partial<Field> {
  id: string;
}

export interface ISelectFieldAction {
  id: string;
}
