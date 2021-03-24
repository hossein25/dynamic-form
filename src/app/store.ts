import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fieldReducer from '../features/form/field-slice';

const customMiddleware = getDefaultMiddleware({serializableCheck: false})

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fields:fieldReducer 
  },
  middleware: customMiddleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;