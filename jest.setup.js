import "whatwg-fetch";
import { makeServer } from "./src/__tests__/__mocks__/server";

let server = null;

beforeEach(() => {
  server = makeServer({environment: "test"});
  /**
   * Enable logging of the server
   */
  // server.logging = true;
  sessionStorage.clear();
});

afterEach(() => server.shutdown());
