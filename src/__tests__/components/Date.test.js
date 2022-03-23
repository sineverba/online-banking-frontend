import {render, screen} from '@testing-library/react';
import Date from "../../components/Date";

describe('Test Date', () => {
    it('Can render Date', () => {
        render(<Date date="2022-03-09T12:31:16.699904" />);
        const date = screen.getByText(/09\/03\/2022/i);
        expect(date).toBeInTheDocument();
    });
});