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
      if (body && body.username && body.username === "empty") {
        status = 200;
        result = [];
      }
      return res(ctx.status(status), ctx.json(result));
    }
  ),
  // Balance
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/balance`,
    (req, res, ctx) => {
      const status = 200;
      return res(ctx.status(status), ctx.json(balance));
    }
  ),
  // Transactions
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions`,
    (req, res, ctx) => {
      const status = 200;
      if (req.url.searchParams.get("page") === "1") {
        return res(
          ctx.delay(),
          ctx.status(status),
          ctx.json(transactionsPage1)
        );
      }
      return res(ctx.status(status), ctx.json(transactionsPage0));
    }
  ),
  // Single transaction
  rest.get(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions/:id`,
    (req, res, ctx) => {
      const status = 200;
      return res(
        ctx.delay(),
        ctx.status(status),
        ctx.json(transactionsPage0.content[0])
      );
    }
  ),
  // Make payment
  rest.post(
    `${process.env.REACT_APP_BACKEND_URL}/v1/bank-account-transactions`,
    (req, res, ctx) => {
      const status = 201;
      return res(ctx.status(status), ctx.json(payment));
    }
  )
];
