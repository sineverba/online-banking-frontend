/**
 * Mirage API mock server definition.
 *
 * @see https://miragejs.com/docs/workflow-tips/#sharing-your-server-between-development-and-testing
 *
 */
import extraValues from "@/app/lib/constants";
import { Response, createServer, Model, RestSerializer } from "miragejs";
import ping from "./responses/ping";
import { login } from "./responses/auth/login";
import error from "./responses/auth/error";
import transactions from "./items/transactions";
import seedTransactions from "./scenarios/transactions";

/**
 *
 * Method to order the json data
 *
 * @param {*} jsonData the starting data
 * @param {*} parameter the field to order against
 * @param {*} order the order, asc ord desc
 * @returns
 */

export const makeServer = ({ environment = "test" }) =>
  createServer({
    /**
     * The test environment
     * - turns off Mirage's artificial latency,
     * - ignores any initial seeds(),
     * - and disables logging to the console.
     *
     *  Since you'll likely be importing makeServer in several tests
     *  but only one place for development,
     *  defaulting the environment to test is a reasonable choice.
     */
    environment,
    /**
     * Declare all data, tables etc etc for our application
     */
    models: {
      transaction: Model
    },
    /**
     * Seeds the data
     */
    seeds(server) {
      /**
       * With the sharedScenario we can import data
       * also in tests
       */
      seedTransactions(server);
    },
    /**
     * Re-create the data as needed
     */
    serializers: {
      transaction: RestSerializer.extend({
        serialize(object, request) {
          /**
           * Fetch the collection from in memory db
           */
          const { models } = object;
          /**
           * Fetch the query params (page, perPage, etc etc)
           */
          const { queryParams } = request;

          /**
           * Make some calculation to paginate query
           */
          const currentPage = queryParams.page ?? 0;
          const collectionLength = models.length;
          const collectionLimit = queryParams.perPage ?? 10;
          const collectionStart = currentPage * collectionLimit;

          const collection = models.slice(
            collectionStart,
            collectionStart + (collectionLimit - 1)
          );

          return {
            content: collection,
            pageable: {
              sort: {
                empty: false,
                sorted: true,
                unsorted: false
              },
              offset: 0,
              pageNumber: currentPage,
              pageSize: collectionLimit,
              paged: true,
              unpaged: false
            },
            totalElements: collectionLength,
            totalPages: Math.ceil(collectionLength / collectionLimit),
            last: false,
            size: collectionLimit,
            number: currentPage,
            sort: {
              empty: false,
              sorted: true,
              unsorted: false
            },
            first: true,
            numberOfElements: collection.length,
            empty: false
          };
        }
      })
    },
    routes() {
      this.urlPrefix = extraValues.get("BACKEND_URL");
      this.namespace = "";

      // Ping URL
      this.get(`${extraValues.get("URL_PING")}`, () => ping);

      // Auth URL
      this.post(`${extraValues.get("URL_LOGIN")}`, (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { username } = attrs;
        if (username === "wrong") {
          return new Response(401, {}, error);
        }
        return login;
      });

      // Balance URL
      this.get(`${extraValues.get("URL_BALANCE")}`, () => {
        return {
          balance: transactions.reduce(
            (acc, transaction) => acc + transaction.amount,
            0
          )
        };
      });

      // Transactions URL
      this.get(`${extraValues.get("URL_TRANSACTIONS")}`, (schema, request) =>
        schema.transactions.all()
      );
    }
  });
