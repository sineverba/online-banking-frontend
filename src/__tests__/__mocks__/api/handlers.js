import { rest } from "msw";
import { item as login } from "../responses/login";
import { item as balance } from "../responses/balance";
import { items as transactions } from "../responses/bank-account-transactions";
import { item as payment } from "../responses/payment";

export const handlers = [
  // Login
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
    (req, res, ctx) => {
      return res(ctx.json(login));
    }
  ),
  // Balance
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/balance`, (req, res, ctx) => {
    return res(ctx.json(balance));
  }),
  // Transactions
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`,
    (req, res, ctx) => {
      return res(ctx.json(transactions));
    }
  ),
  // Single transaction
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions/:id`, (req, res, ctx) => {
    return res(ctx.json(transactions.content[0]));
  }),
  // Make payment
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`,
    (req, res, ctx) => {
      return res(ctx.json(payment));
    }
  )
];
