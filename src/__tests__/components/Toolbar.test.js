import {render, screen} from '@testing-library/react';
import Toolbar from "../../components/Toolbar";

const buttons = [
    {
        value: '1234',
    }
];

describe('Test Toolbar', () => {
    it('Can render Toolbar', () => {

        render(<Toolbar data={buttons} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

    });
});