import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mapSlice } from './map/slice';
import { filterSlice } from './filter/slice';
import { langSlice } from './lang/slice';

export const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    map: mapSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;