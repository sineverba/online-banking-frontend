import CommonStore from "../../../reducers/base/CommonStore";

const fakeEntity = "fake";

describe('Test CommonStore', () => {

    const cStore = new CommonStore();
    let commonStore = cStore.create(fakeEntity);
    const initialState = null;
    

    it ('Test TRY_FETCH returns isLoading === true', () => {
        const data = {
            type: "TRY_POST_FAKE_ITEMS",
        }
        const result = commonStore.isLoading(initialState, data);
        expect(result).toBeTruthy();
    })

    it ('Test TRY_FETCH returns isLoading === false', () => {
        const data = {
            type: "POST_FAKE_ITEMS_SUCCEEDED",
        }
        const result = commonStore.isLoading(initialState, data);
        expect(result).toBeFalsy();
    })

    it ('Test can handle content under items returned', () => {
        const data = {
            type: "INDEX_FAKE_ITEMS_SUCCEEDED",
        }
        const result = commonStore.isLoading(initialState, data);
        expect(result).toBeFalsy();
    })

});