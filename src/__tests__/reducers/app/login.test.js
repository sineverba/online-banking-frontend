import login from "../../../reducers/app/login";
import { LOGOUT, REACT_FE_ACCESS_TOKEN } from "../../../utils/constants/constant";

describe ('Login reducer', () => {

    let initialState = {
        accessToken: null,
        isLoading: false,
        items: [],
    };

    it ('Test default state returns default values', () => {
        expect(login(initialState)).toEqual(initialState);
    });

    it ('Should handle accessToken', () => {
        const action = {
            type: "POST_LOGIN_ITEMS_SUCCEEDED",
            data: {
                access_token: "a1.b2.c3",
            }
        };
        expect(login(initialState, action)).toMatchObject(
            {
                accessToken: "a1.b2.c3"
            }
        );
    });

    it ('Should handle missing data.access_token', () => {
        const action = {
            type: "POST_LOGIN_ITEMS_SUCCEEDED",
            data: {}
        };
        expect(login(initialState, action)).toMatchObject(
            {
                accessToken: null
            }
        );
    });

    it ('Should handle return access token from localStorage', () => {
        localStorage.setItem(REACT_FE_ACCESS_TOKEN, "zz.yy.xx");
        expect(login(initialState)).toMatchObject(
            {
                accessToken: "zz.yy.xx"
            }
        );
    });

    it ('Should handle logout', () => {
        const action = {
            type: LOGOUT
        };
        expect(login(initialState, action)).toMatchObject(
            {
                accessToken: null
            }
        );
    });
})