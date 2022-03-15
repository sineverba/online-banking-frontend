import {render, screen} from '@testing-library/react';
import Amount from "../../components/Amount";

describe('Test Amount', () => {
    it('Can render Amount black with positive amount', () => {
        render(<Amount amount={100} />);
        const amount = screen.getByText(/100/i);
        expect(amount).toBeInTheDocument();
        expect(screen.getByText(/100/i)).toHaveClass("amount");
    });

    it('Can render Amount red with negative amount', () => {
        render(<Amount amount={-99} />);
        const amount = screen.getByText(/-99/i);
        expect(amount).toBeInTheDocument();
        expect(screen.getByText(/-99/i)).toHaveClass("amount text-danger");
    });
});