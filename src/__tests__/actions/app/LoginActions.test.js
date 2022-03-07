import { actions as loginActions } from "../../../actions/app/LoginActions";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { waitFor } from "@testing-library/react";
import nock from "nock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const entity = 'login'; // Questo è il nome dell'entità passata nel costruttore del file Actions
const apiResourceUrl = '/auth/login'; // This value need to be the SAME of Login API file.
const payload = {
    username: "fakeUsername",
    password: "fakePassword",
};
const dataPostItems = {
    "access_token": "a1.b2.c3",
    "expiry_at": 10800000,
}


describe('Test Login Actions', () => {

    let store;

    beforeEach(() => {
        store = mockStore({})
    })

    it('Test can get entity name', () => {
        expect(loginActions.getEntity()).toBe(entity.toUpperCase());
    });

    it('Test can dispatch success actions', async () => {
        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .post(apiResourceUrl, payload)
            .reply(200, dataPostItems);
        store.dispatch(loginActions.post(payload));
        expect(store.getActions()).toContainEqual({
            type: "TRY_POST_LOGIN_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_POST_LOGIN_ITEMS",
            },
            {
                type: "POST_LOGIN_ITEMS_SUCCEEDED",
                data: dataPostItems,
            }]);
        });
    });

    it('Test can dispatch failed actions', async () => {
        nock(process.env.REACT_APP_BACKEND_URL)
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true'
            })
            .post(apiResourceUrl, payload)
            .reply(401);
        store.dispatch(loginActions.post(payload));
        expect(store.getActions()).toContainEqual({
            type: "TRY_POST_LOGIN_ITEMS",
        });

        await waitFor(() => {
            expect(store.getActions()).toEqual([{
                type: "TRY_POST_LOGIN_ITEMS",
            },
            {
                type: "POST_LOGIN_ITEMS_FAILED",
                error: "Error: Request failed with status code 401"
            }]);
        });
    });

});
