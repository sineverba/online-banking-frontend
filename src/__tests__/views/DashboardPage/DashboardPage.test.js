import { render, screen} from '@testing-library/react';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import DashboardPage from "../../../views/DashboardPage/DashboardPage";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    balance: {
        items: {
            balance: "1234.56"
        }
    }
};
let store = mockStore(initialState);

describe('Test DashboardPage', () => {
    it('Can render DashboardPage', () => {
        render(<DashboardPage store={store} />);
        const title = screen.getByText(/dashboard/i);
        expect(title).toBeInTheDocument();
    });

    it('Can render Kpi balance', () => {
        render(<DashboardPage store={store} />);
        const title = screen.getByText(/balance/i);
        expect(title).toBeInTheDocument();
        const balance = screen.getByText(/1234.56/i);
        expect(balance).toBeInTheDocument();
    });

    it('Can handle loading', () => {
        let initialState = {
            balance: {
                isLoading: true
            }
        }
        let store = mockStore(initialState);
        const {container} = render(<DashboardPage store={store} />);
        expect(container.getElementsByClassName('svg-inline--fa fa-spinner').length).toBe(1);
    })
})