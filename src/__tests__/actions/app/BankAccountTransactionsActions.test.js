import { actions as bankAccountTransactionsActions } from "../../../actions/app/BankAccountTransactionsActions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { waitFor } from "@testing-library/react";
import nock from "nock";
import * as Constants from "../../../utils/constants/constant";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const entity = 'bankaccounttransactions'; // Questo è il nome dell'entità passata nel costruttore del file Actions
const apiResourceUrl = '/bank-account-transactions'; // This value need to be the SAME of Login API file.
const dateGetReturn = {
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

describe('Test Bank Account Transactions Actions', () => {

    let store;

    beforeEach(() => {
        store = mockStore({})
    })

    it('Test can get entity name', () => {
        expect(bankAccountTransactionsActions.getEntity()).toBe(entity.toUpperCase());
    });

    it('Test can dispatch success actions', async () => {
        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .get(apiResourceUrl)
            .query({
                page: 0,
                perPage: 5,
            })
            .reply(200, dateGetReturn);
        store.dispatch(bankAccountTransactionsActions.index());
        expect(store.getActions()).toContainEqual({
            type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
            },
            {
                type: "INDEX_BANKACCOUNTTRANSACTIONS_ITEMS_SUCCEEDED",
                data: dateGetReturn,
            }]);
        });
    });

    it('Test can dispatch failed actions', async () => {
        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .get(apiResourceUrl)
            .query({
                page: 0,
                perPage: 5,
            })
            .reply(401);
        store.dispatch(bankAccountTransactionsActions.index());
        expect(store.getActions()).toContainEqual({
            type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
            },
            {
                type: "INDEX_BANKACCOUNTTRANSACTIONS_ITEMS_FAILED",
                error: "Error: Request failed with status code 401"
            }]);
        });
    });

    it('Test can handle STARTING_ZERO constant', async () => {

        /**
         * Mock a constant and redefine his property
         */
        Object.defineProperty(Constants, 'STARTING_ZERO', {
            value: false,
        });

        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .get(apiResourceUrl)
            .query({
                page: 1,
                perPage: 5,
            })
            .reply(200, dateGetReturn);
        store.dispatch(bankAccountTransactionsActions.index());
        expect(store.getActions()).toContainEqual({
            type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_INDEX_BANKACCOUNTTRANSACTIONS_ITEMS",
            },
            {
                type: "INDEX_BANKACCOUNTTRANSACTIONS_ITEMS_SUCCEEDED",
                data: dateGetReturn,
            }]);
        });
    });

});
