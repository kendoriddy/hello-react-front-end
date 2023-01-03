import { configureStore } from '@reduxjs/toolkit';
import { greetingsApi } from './features/apiSlice';

const store = configureStore({
  reducer: {
    [greetingsApi.reducerPath]: greetingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(greetingsApi.middleware),
});

export default store;
