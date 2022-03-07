import ApiCrud from "../../../api/base/ApiCrud";

describe('Test API Crud', () => {

    it ('Test can get base URL', () => {
        const apiCrud = new ApiCrud();
        expect(apiCrud.getBaseUrl()).toBe(undefined);
    });


});