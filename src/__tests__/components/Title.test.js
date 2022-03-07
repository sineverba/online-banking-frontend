import {render, screen} from '@testing-library/react';
import Title from "../../components/Title";

describe('Test Title', () => {
    it('Can render Title', () => {

        render(<Title />);

        const label = screen.getByText(/title/i);
        expect(label).toBeInTheDocument();

    });

    it('Can render Title with custom label', () => {

        render(<Title label="Dashboard" />);

        const label = screen.getByText(/dashboard/i);
        expect(label).toBeInTheDocument();

    });
});