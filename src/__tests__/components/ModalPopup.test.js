import {render, screen} from '@testing-library/react';
import ModalPopup from "../../components/ModalPopup";

const data = {
    show: true,
    title: "Title",
    tabs: [
        {
            tabEventKey: 1,
            tabTitle: "detail",
            children: <p>Hello world, popup!</p>
        }
    ]
};

describe('Test ModalPopup', () => {
    it('Can render ModalPopup', () => {
        render(<ModalPopup {...data} />);
        const title = screen.getByText(/title/i);
        expect(title).toBeInTheDocument();
    });
});