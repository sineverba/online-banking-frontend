import { render, screen } from '@testing-library/react';
import Kpi from "../../components/Kpi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

describe('Test Kpi', () => {
    it('Can render Kpi', () => {
        const {container} = render(<Kpi />);
        expect(container.getElementsByClassName('card').length).toBe(1);
    });

    it('Can render title, value and icon', () => {
        render(<Kpi title="Balance" value="1234.56" icon="" />);
        const title = screen.getByText(/balance/i);
        expect(title).toBeInTheDocument();
        const value = screen.getByText(/1234.56/i);
        expect(value).toBeInTheDocument();


        const {container} = render(<Kpi title="Balance" value="1234.56" icon={<FontAwesomeIcon icon={faEuroSign} />} />);
        expect(container.getElementsByClassName('svg-inline--fa fa-euro-sign').length).toBe(1);
    });
});