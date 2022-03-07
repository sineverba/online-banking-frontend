import CommonActions from "../../../actions/base/CommonActions";

const fakeApi = "fakeApi";
const fakeEntity = "fakeEntity";

describe('Test CommontActions', () => {
    it ('Test can get API instance', () => {
        const cActions = new CommonActions(fakeEntity, fakeApi);
        expect(cActions.getApi()).toBe(fakeApi)
    })
});