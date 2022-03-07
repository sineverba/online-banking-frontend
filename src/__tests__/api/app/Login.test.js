import Login from "../../../api/app/Login";

const baseUrl = "/auth/login";

describe('Test API login', () => {
    it('Test can get base url', () => {
        const login = new Login();
        expect(login.getBaseUrl()).toBe(baseUrl);
    });
});