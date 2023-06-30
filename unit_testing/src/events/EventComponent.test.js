import { render, fireEvent } from '@testing-library/react';
import EventComponent from './EventComponent';

test('updates state correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<EventComponent handleClick={handleClick} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});