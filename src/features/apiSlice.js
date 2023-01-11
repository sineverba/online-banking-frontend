import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import prepareHeaders from "../utils/methods/prepareHeaders";

export const apiSlice = createApi({
  // Reducer Path it's name shown on Redux Tab
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      prepareHeaders(headers);
    }
  }),
  /**
   * Convention: tag type singular
   */
  tagTypes: ["login", "balance", "transaction"],
  endpoints: (builder) => ({
    /**
     * Login section
     */
    postLogin: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body
      })
    }),
    /**
     * Balance section
     */
    getBalance: builder.query({
      query: () => "/balance",
      providesTags: ["balance", "transaction"]
    }),
    /**
     * Transactions section
     */
    getTransactions: builder.query({
      query: () => "/bank-account-transactions",
      providesTags: ["transaction"]
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query for query
 * Names export are endpoints: use{endpoint}Mutation for Mutation
 */
export const { usePostLoginMutation, useGetBalanceQuery, useGetTransactionsQuery } = apiSlice;
