import { render, fireEvent} from '@testing-library/react';
import StateComponent from './StateComponent';

test('updates state correctly', () => {
    const { getByText } = render(<StateComponent/>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(getByText('Clicked!')).toBeInTheDocument();

});