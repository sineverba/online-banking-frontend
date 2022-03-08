import Balance from "../../../api/app/Balance";

const baseUrl = "/balance";

describe('Test API Balance', () => {
    it('Test can get base url', () => {
        const balance = new Balance();
        expect(balance.getBaseUrl()).toBe(baseUrl);
    });
});