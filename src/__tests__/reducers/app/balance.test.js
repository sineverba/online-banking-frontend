import balance from "../../../reducers/app/balance";

describe ('Balance reducer', () => {

    let initialState = {
        isLoading: false,
        items: [],
    };

    it ('Test default state returns default values', () => {
        expect(balance(initialState)).toEqual(initialState);
    });

    it ('Should handle INDEX ITEMS SUCCEEEDED', () => {
        const action = {
            type: "INDEX_BALANCE_ITEMS_SUCCEEDED",
            data: {
                balance: "1234.56"
            }
        };
        expect(balance(initialState, action)).toMatchObject(
            {
                items: {
                    balance: "1234.56"
                }
            }
        );
    });
})