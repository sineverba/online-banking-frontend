import { fireEvent, render, screen } from "@testing-library/react";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import PaymentsForm from "../../../views/PaymentsPage/PaymentsForm";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};

const store = mockStore(initialState);

describe('Test Login Form', () => {
    it ('Should handle click', () => {
        render(<PaymentsForm store={store} />);
        fireEvent.change(screen.getByLabelText(/amount/i), {
            target: {
                value: "1234.56"
            }
        })

        fireEvent.change(screen.getByLabelText(/purpose/i), {
            target: {
                value: "High School 2021 - 2022"
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button);
    });

    it ('Should not handle click if fields are empty', () => {

        render(<PaymentsForm store={store} />);
        const button = screen.getByRole('button')
        fireEvent.click(button);
        
    });
});