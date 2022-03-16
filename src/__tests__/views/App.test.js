import {render, screen} from '@testing-library/react';
import App from '../../views/App';
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

describe('Test App', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    let initialState = {
        balance: {
            items: []
        },
        layout: {
            isNavbarClosed: false
        },
        login: {
            accessToken: "a1.b2.c3"
        }
    };

    let store = mockStore(initialState);

    it('Render app without crash', () => {
        render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
        const title = screen.getAllByText(/dashboard/i).at(0);
        expect(title).toBeInTheDocument();
    });

    it('Render login without token', () => {
        let initialState = {
            layout: {
                isNavbarClosed: false
            },
            login: {
                accessToken: null
            }
        };
    
        let store = mockStore(initialState);
        render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });
});