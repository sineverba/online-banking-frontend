import transactions from "../items/transactions";

const seedTransactions = (server) => {
  transactions.map((transaction) => server.create("transaction", transaction));
};

export default seedTransactions;
