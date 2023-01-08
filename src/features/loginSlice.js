import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginSlice = createApi({
  // Reducer Path it's name shown on Redux Tab
  reducerPath: "loginSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}/auth`
  }),
  // With tag type we can invalidate cache
  tagTypes: ["login"],
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body
      })
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query for query
 * Names export are endpoints: use{endpoint}Mutation for Mutation
 */
export const { usePostLoginMutation } = loginSlice;
