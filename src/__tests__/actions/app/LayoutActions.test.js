import { actions as layoutActions } from "../../../actions/app/LayoutActions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { TOGGLE_NAVBAR_BUTTON } from "../../../utils/constants/constant";

describe('Test Sidebar', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    let initialState = {
        layout: {
            isNavbarClosed: false
        }
    };

    let store = mockStore(initialState);

    it ('Test can get entity name', () => {
        expect(layoutActions.getEntity()).toBe("LAYOUT");
    });

    it ('Test can dispatch TOGGLE_NAVBAR action', async() => {
        store.dispatch(layoutActions.toggleNavbar());
        expect(store.getActions()).toContainEqual({
            type: TOGGLE_NAVBAR_BUTTON
        })
    });
});