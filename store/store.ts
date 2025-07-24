import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

/// step 1
//  create Redux store

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
