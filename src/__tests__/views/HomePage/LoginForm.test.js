import { fireEvent, render, screen } from "@testing-library/react"
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import LoginForm from "../../../views/HomePage/LoginForm";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};

const store = mockStore(initialState);

describe('Test Login Form', () => {
    it ('Should handle click', () => {
        render(<LoginForm store={store} />);
        fireEvent.change(screen.getByLabelText(/username/i), {
            target: {
                value: "fakeUsername"
            }
        })

        fireEvent.change(screen.getByLabelText(/password/i), {
            target: {
                value: "fakePassword"
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button);
    });

    it ('Should not handle click if fields are empty', () => {

        render(<LoginForm store={store} />);
        const button = screen.getByRole('button')
        fireEvent.click(button);
        
    });
});