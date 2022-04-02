import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import ModalPopup from '../../../components/ModalPopup';
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
                "transactionDate": "2022-03-10T12:31:32.621767"
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

    it('Can render local date', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const date = screen.getByText(/09\/03\/2022/i);
        expect(date).toBeInTheDocument();
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

    it('Can handle remote sort', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const headerColumn = screen.getByText('Amount');
        fireEvent.click(headerColumn);
    });

    it('Can handle empty items', () => {
        const emptyState = {
            bankAccountTransactions: {
                items: null
            }
        };
        store = mockStore(emptyState);
        render(<BankAccountTransactionsPage store={store} />);
        const headerColumn = screen.getByText('There are no records to display');
        fireEvent.click(headerColumn);
    });

    it('Can handle open modal', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const makePayment = screen.getByText(/make a payment/i);
        fireEvent.click(makePayment);
    })

    it('Can handle close modal', () => {
        render(<BankAccountTransactionsPage store={store} />);
        const makePayment = screen.getByText(/make a payment/i);
        fireEvent.click(makePayment);
        const button = screen.getByText(/close/i);
        fireEvent.click(button);
    })

})