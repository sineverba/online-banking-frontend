import BankAccountTransactions from "../../../api/app/BankAccountTransactions";

const baseUrl = "/bank-account-transactions";

describe('Test API BankAccountTransactions', () => {
    it('Test can get base url', () => {
        const bankAccountTransactions = new BankAccountTransactions();
        expect(bankAccountTransactions.getBaseUrl()).toBe(baseUrl);
    });
});