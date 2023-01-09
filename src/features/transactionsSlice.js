import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import prepareHeaders from "../utils/methods/prepareHeaders";

export const transactionsSlice = createApi({
  // Reducer Path it's name shown on Redux Tab
  reducerPath: "transactionsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      prepareHeaders(headers);
    }
  }),
  // With tag type we can invalidate cache
  tagTypes: ["transactions"],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/bank-account-transactions"
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query for query
 * Names export are endpoints: use{endpoint}Mutation for Mutation
 */
export const { useGetTransactionsQuery } = transactionsSlice;
