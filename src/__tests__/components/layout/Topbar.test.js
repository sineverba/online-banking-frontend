import {fireEvent, render, screen} from '@testing-library/react';
import Topbar from "../../../components/layout/Topbar";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { actions as layoutActions } from "../../../actions/app/LayoutActions"
import { actions as loginActions } from '../../../actions/app/LoginActions';

describe('Test Topbar', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    let initialState = {
        layout: {
            isNavbarClosed: false
        },
        login: {
            accessToken: 'a1.b2.c3'
        },
        toggleNavbar: () => dispatch(layoutActions.toggleNavbar()),
        logout: () => dispatch(loginActions.logout())
    };

    let store = mockStore(initialState);

    it('Can handle handleClick without crashing', () => {
        
        render(<BrowserRouter><Topbar store={store} /></BrowserRouter>);
        const button = screen.getAllByRole('button').at(0);
        fireEvent.click(button);

    });

    it('Can handle handleClickLogout without crashing', () => {
        
        render(<BrowserRouter><Topbar store={store} /></BrowserRouter>);
        const username = screen.getByText(/john/i)
        fireEvent.click(username);
        const logout = screen.getByText(/logout/i)
        fireEvent.click(logout);

    });
});