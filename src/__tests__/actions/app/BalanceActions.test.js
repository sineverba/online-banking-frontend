import { actions as balanceActions } from "../../../actions/app/BalanceActions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { waitFor } from "@testing-library/react";
import nock from "nock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const entity = 'balance'; // Questo è il nome dell'entità passata nel costruttore del file Actions
const apiResourceUrl = '/balance'; // This value need to be the SAME of Login API file.
const dateGetReturn = {
    "balance": 1234.56,
}


describe('Test Balance Actions', () => {

    let store;

    beforeEach(() => {
        store = mockStore({})
    })

    it('Test can get entity name', () => {
        expect(balanceActions.getEntity()).toBe(entity.toUpperCase());
    });

    it('Test can dispatch success actions', async () => {
        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .get(apiResourceUrl)
            .reply(200, dateGetReturn);
        store.dispatch(balanceActions.index());
        expect(store.getActions()).toContainEqual({
            type: "TRY_INDEX_BALANCE_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_INDEX_BALANCE_ITEMS",
            },
            {
                type: "INDEX_BALANCE_ITEMS_SUCCEEDED",
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
            .reply(401);
        store.dispatch(balanceActions.index());
        expect(store.getActions()).toContainEqual({
            type: "TRY_INDEX_BALANCE_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_INDEX_BALANCE_ITEMS",
            },
            {
                type: "INDEX_BALANCE_ITEMS_FAILED",
                error: "Error: Request failed with status code 401"
            }]);
        });
    });

});
