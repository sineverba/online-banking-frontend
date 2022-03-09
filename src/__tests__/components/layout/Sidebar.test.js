import {render} from '@testing-library/react';
import Sidebar from "../../../components/layout/Sidebar";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe('Test Sidebar', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    let initialState = {
        layout: {
            isNavbarClosed: false
        },
        login: {
            accessToken: 'a1.b2.c3'
        }
    };

    let store = mockStore(initialState);

    it('Can show Sidebar', () => {

        const {container} = render(<BrowserRouter><Sidebar store={store} /></BrowserRouter>);
        expect(container.getElementsByClassName('d-block').length).toBe(1);

    });

    it('Can hide Sidebar', () => {

        let initialState = {
            layout: {
                isNavbarClosed: true,
            },
            login: {
                accessToken: 'a1.b2.c3'
            }
        };
    
        let store = mockStore(initialState);

        const {container} = render(<BrowserRouter><Sidebar store={store} /></BrowserRouter>);
        expect(container.getElementsByClassName('sidebar d-none').length).toBe(1);

    });
});