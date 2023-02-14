import { rest } from "msw";
import { item as login } from "../responses/login";
import { item as balance } from "../responses/balance";
import { items as transactionsPage0 } from "../responses/bank-account-transactions/page-00";
import { items as transactionsPage1 } from "../responses/bank-account-transactions/page-01";
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
      if (req.url.searchParams.get("page") === "1") {
        return res(ctx.json(transactionsPage1));
      }
      return res(ctx.json(transactionsPage0));
    }
  ),
  // Single transaction
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions/:id`, (req, res, ctx) => {
    return res(ctx.json(transactionsPage0.content[0]));
  }),
  // Make payment
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/bank-account-transactions`,
    (req, res, ctx) => {
      return res(ctx.json(payment));
    }
  )
];
