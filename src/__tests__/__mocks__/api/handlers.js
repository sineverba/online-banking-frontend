import { rest } from "msw";
import { item as login } from "../responses/login";
import { item as balance } from "../responses/balance";
import { items as transactionsPage0 } from "../responses/bank-account-transactions/page-00";
import { items as transactionsPage1 } from "../responses/bank-account-transactions/page-01";
import { item as payment } from "../responses/payment";

export const handlers = [
  // Login
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/v1/auth/login`,
    async (req, res, ctx) => {
      let status = 200;
      let result = login;
      const body = await req.json();
      // Wrong, 401
      if (body && body.username && body.username === "wrong") {
        status = 401;
        result = auth401;
      }
      return res(ctx.delay(), ctx.status(status), ctx.json(result));
    }
  ),
  // Balance
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/balance`,
    (req, res, ctx) => {
      return res(ctx.delay(), ctx.status(200), ctx.json(balance));
    }
  ),
  // Transactions
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions`,
    (req, res, ctx) => {
      if (req.url.searchParams.get("page") === "1") {
        return res(ctx.delay(), ctx.status(200), ctx.json(transactionsPage1));
      }
      return res(ctx.delay(), ctx.status(200), ctx.json(transactionsPage0));
    }
  ),
  // Single transaction
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions/:id`,
    (req, res, ctx) => {
      const { id } = req.params;
      let result = transactionsPage0.content.filter(
        (transaction) => transaction.id === Number(id)
      );
      if (result.length === 0) {
        result = transactionsPage1.content.filter(
          (transaction) => transaction.id === Number(id)
        );
      }
      return res(ctx.delay(), ctx.status(200), ctx.json(result[0]));
    }
  ),
  // Make payment
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions`,
    (req, res, ctx) => {
      return res(ctx.delay(), ctx.status(201), ctx.json(payment));
    }
  )
];
