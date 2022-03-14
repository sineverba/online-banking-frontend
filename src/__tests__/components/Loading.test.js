import { render } from '@testing-library/react';
import Loading from "../../components/Loading";

describe('Test Loading', () => {
    it('Can render loading', () => {
        const {container} = render(<Loading />);
        expect(container.getElementsByClassName('svg-inline--fa fa-spinner').length).toBe(1);
    });
});