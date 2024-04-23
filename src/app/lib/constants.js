const extraValues = new Map();

extraValues.set("SESSIONSTORAGE_ACCESS_TOKEN", "OnlineBankingFrontendAccessToken");
extraValues.set("BACKEND_URL", process.env.NEXT_PUBLIC_BACKEND_URL);
extraValues.set("URL_PING", "ping");
extraValues.set("URL_LOGIN", "auth/login");
extraValues.set("URL_BALANCE", "balance");
extraValues.set("URL_TRANSACTIONS", "bank-account-transactions");
extraValues.set("REDUX_REDUCER_PATH", "apiSlice");
extraValues.set("REDUX_TAG_PING", "ping");
extraValues.set("REDUX_TAG_BALANCE", "balance");
extraValues.set("REDUX_TAG_TRANSACTIONS", "transactions");
extraValues.set("PAGE_DASHBOARD", "dashboard");
extraValues.set("PAGE_TRANSACTIONS", "transactions");
extraValues.set("REGEX_ONLY_CHAR_NUMBER", /[^a-zA-Z0-9]/g);

export default extraValues;
