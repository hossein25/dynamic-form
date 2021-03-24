import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAddFieldAction,
  IChangeFormDataAction,
  IEditFieldAction,
  ISelectFieldAction,
} from "./field-types";
import { Field } from "./model/Field";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

export interface FieldsState {
  fields: Record<string, Field>;
  selectedField: Field | undefined;
  formData: Record<string, unknown>;
}

const initialState: FieldsState = {
  fields: {},
  selectedField: undefined,
  formData: {},
};

const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<IAddFieldAction>) => {
      state.fields[action.payload.field.id] = action.payload.field;
    },
    editField: (state, action: PayloadAction<IEditFieldAction>) => {
      const { payload } = action;
      const { fields } = state;
      fields[payload.id] = {
        ...fields[payload.id],
        ...payload,
      };
    },
    selectField: (state, action: PayloadAction<ISelectFieldAction>) => {
      state.selectedField = state.fields[action.payload.id];
    },
    changeFormData: (state, action: PayloadAction<IChangeFormDataAction>) => {
      const { id, value } = action.payload;
      state.formData[id] = value;
    },
  },
});

export const { addField, editField, selectField, changeFormData } = fieldsSlice.actions;

export const getFormState = (store: RootState) => store.fields;

export const getFields = (store: RootState) => store.fields.fields;

export const getSelectedField = (store: RootState) => store.fields.selectedField;

export const getField = (store: RootState, id: string) => store.fields.fields[id];

export const useFormState = () => useAppSelector(getFormState);

export const useFieldsState = () => useAppSelector(getFields);

export const useSelectedField = () => useAppSelector(getSelectedField);

export const useFieldValue = (id: string) => useAppSelector((store) => store.fields.formData[id]);

export const useFieldState = (id: string) => useAppSelector((store) => getField(store, id));

export default fieldsSlice.reducer;
