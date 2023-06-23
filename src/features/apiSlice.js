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
  tagTypes: ["login", "balance", "transactions", "transaction"],
  endpoints: (builder) => ({
    /**
     * Login section
     */
    postLogin: builder.mutation({
      query: (body) => ({
        url: "/v1/auth/login",
        method: "POST",
        body
      }),
      providesTags: ["login"]
    }),
    /**
     * Balance section
     */
    getBalance: builder.query({
      query: () => "/v1/balance",
      providesTags: ["balance", "transactions"]
    }),
    /**
     * Transactions section
     */
    getTransactions: builder.query({
      query: (queryString) => `/v1/bank-account-transactions?${queryString}`,
      providesTags: ["transactions"]
    }),
    // Single
    getTransaction: builder.query({
      query: (id) => `/v1/bank-account-transactions/${id}`,
      providesTags: ["transaction"]
    }),
    postPayment: builder.mutation({
      query: (body) => ({
        url: "/v1/bank-account-transactions",
        method: "POST",
        body
      }),
      invalidatesTags: ["transactions"]
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query for query
 * Names export are endpoints: use{endpoint}Mutation for Mutation
 */
export const {
  usePostLoginMutation,
  useGetBalanceQuery,
  useGetTransactionsQuery,
  useGetTransactionQuery,
  usePostPaymentMutation
} = apiSlice;
