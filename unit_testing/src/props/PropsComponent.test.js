import {render} from "@testing-library/react";
import PropsComponent from "./PropsComponent";

test('Renders with correct props', () => {
    const props = { name: 'John', age: 20 };
    const { getByText } = render(<PropsComponent {...props} />);
    expect(getByText(`Name: ${props.name}`)).toBeInTheDocument();
    expect(getByText(`Age: ${props.age}`)).toBeInTheDocument();

});
