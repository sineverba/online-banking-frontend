import { render } from '@testing-library/react';
import Datatable from "../../components/Datatable";

describe('Test Datatable', () => {
    it('Can render datatable', () => {
        const {container} = render(<Datatable />);
        expect(container.getElementsByClassName('rdt_Table').length).toBe(1);
    });
});