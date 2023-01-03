import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const greetingsApi = createApi({
  reducerPath: "greetingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    getGreeting: builder.query({
      query: () => "greetings",
    }),
  }),
});

export const { useGetGreetingQuery } = greetingsApi;