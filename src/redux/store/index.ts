import { configureStore } from '@reduxjs/toolkit';

import NavReducer from '../slices/navSlice';

export const store = configureStore({
  reducer: {
    nav: NavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
