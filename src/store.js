import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { greetingsApi } from "./features/apiSlice";
export const store = configureStore({
  reducer: {
    [greetingsApi.reducerPath]: greetingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(greetingsApi.middleware),
});
