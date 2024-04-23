import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import extraValues from "../lib/constants";
import { getHeaders } from "../lib/utilityStore";

/**
 * Base function to call backend
 */
const baseQuery = fetchBaseQuery({
  baseUrl: extraValues.get("BACKEND_URL"),
  prepareHeaders: (headers) => getHeaders(headers)
});

export const apiSlice = createApi({
  // ReducerPath is name shown on Redux Tab
  reducerPath: extraValues.get("REDUX_REDUCER_PATH"),
  // BaseQUery: prepare the call with headers and so on
  baseQuery,
  tagTypes: [
    extraValues.get("REDUX_TAG_PING"),
    extraValues.get("REDUX_TAG_BALANCE"),
    extraValues.get("REDUX_TAG_TRANSACTIONS")
  ],
  endpoints: (builder) => ({
    getPing: builder.query({
      query: () => `/${extraValues.get("URL_PING")}`,
      providesTags: [extraValues.get("REDUX_TAG_PING")]
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: `/${extraValues.get("URL_LOGIN")}`,
        method: "POST",
        body
      })
    }),
    getBalance: builder.query({
      query: () => `/${extraValues.get("URL_BALANCE")}`,
      providesTags: [extraValues.get("REDUX_TAG_BALANCE")]
    }),
    getTransactions: builder.query({
      query: (queryString) => `/${extraValues.get("URL_TRANSACTIONS")}?${queryString}`,
      providesTags: [extraValues.get("REDUX_TAG_TRANSACTIONS")]
    })
  })
});

export const {
  useGetPingQuery,
  usePostLoginMutation,
  useGetBalanceQuery,
  useGetTransactionsQuery
} = apiSlice;
