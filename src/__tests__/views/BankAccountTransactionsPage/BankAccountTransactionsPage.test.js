import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import BankAccountTransactionsPage from "../../../views/BankAccountTransactionsPage/BankAccountTransactionsPage";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    bankAccountTransactions: {
        items: [
            {
                "id": 37,
                "amount": 1234.56,
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
        total: 90,
    }
};
let store = mockStore(initialState);

describe('Test BankAccountTransactionsPage', () => {
    it('Can render BankAccountTransactionsPage', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const title = screen.getByText(/transactions/i);
        expect(title).toBeInTheDocument();
    });

    it('Can render items', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const purpose = screen.getByText(/march/i);
        expect(purpose).toBeInTheDocument();
        const amount = screen.getByText(/1234.56/i);
        expect(amount).toBeInTheDocument();
    });

    it('Can handlePerRowsChange', () => {
        render(<BankAccountTransactionsPage store={store} />);

        const nextPage = screen.getByLabelText('Next Page');
        fireEvent.click(nextPage);

        const perPage = screen.getByLabelText('Rows per page:');
        fireEvent.change(perPage, {
            target: { value: "20" },
        });

    });
})