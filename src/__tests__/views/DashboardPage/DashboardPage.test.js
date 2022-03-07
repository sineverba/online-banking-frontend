import { render, screen} from '@testing-library/react';
import DashboardPage from "../../../views/DashboardPage/DashboardPage";

describe('Test DashboardPage', () => {
    it('Can render DashboardPage', () => {

        render(<DashboardPage />);

        const title = screen.getByText(/dashboard/i);
        expect(title).toBeInTheDocument();

    });
});