import bankAccountTransactions from "../../../reducers/app/bankAccountTransactions";

describe ('bankAccountTransactions reducer', () => {

    const payload = {
        "content": [
            {
                "id": 37,
                "amount": 2400.00,
                "purpose": "March Salary",
                "transactionDate": "2022-03-11T06:20:34.284112"
            },
            {
                "id": 36,
                "amount": -10.00,
                "purpose": "Croissant Bar",
                "transactionDate": "2022-03-10T06:31:17.042767"
            },
            {
                "id": 35,
                "amount": 7.77,
                "purpose": "Stake 5HHIG",
                "transactionDate": "2022-03-10T06:30:58.029069"
            },
            {
                "id": 34,
                "amount": -10.00,
                "purpose": "Netlify Monthly Subscription",
                "transactionDate": "2022-03-09T12:31:32.621767"
            },
            {
                "id": 33,
                "amount": 44.44,
                "purpose": "Stake 5HHIG",
                "transactionDate": "2022-03-09T12:31:16.699904"
            }
        ],
        "pageable": {
            "sort": {
                "empty": false,
                "unsorted": false,
                "sorted": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 5,
            "paged": true,
            "unpaged": false
        },
        "totalElements": 37,
        "totalPages": 8,
        "last": false,
        "size": 5,
        "number": 0,
        "sort": {
            "empty": false,
            "unsorted": false,
            "sorted": true
        },
        "first": true,
        "numberOfElements": 5,
        "empty": false
    };

    let initialState = {
        isLoading: false,
        items: [],
        total: null,
    };

    it ('Test default state returns default values', () => {
        expect(bankAccountTransactions(initialState)).toEqual(initialState);
    });

    it ('Should handle INDEX ITEMS SUCCEEEDED', () => {
        const action = {
            type: "INDEX_BANKACCOUNTTRANSACTIONS_ITEMS_SUCCEEDED",
            data: payload
        };

        const { content } = payload;

        expect(bankAccountTransactions(initialState, action)).toEqual(
            {
                isLoading: false,
                items: content,
                total: 37
            }
        );
    });
})