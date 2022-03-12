import layout from "../../../reducers/app/layout";
import { TOGGLE_NAVBAR_BUTTON } from "../../../utils/constants/constant";

describe ('Layout reducer', () => {

    let initialState = {
        isLoading: false,
        isNavbarClosed: false,
        items: [],
        total: null,
    };

    it ('Test default state returns default values', () => {
        expect(layout(initialState)).toEqual(initialState);
    });

    it ('Should handle TOGGLE_NAVBAR_BUTTON', () => {
        const action = {
            type: TOGGLE_NAVBAR_BUTTON
        };
        expect(layout(initialState, action)).toMatchObject({isNavbarClosed: true});
    });
})