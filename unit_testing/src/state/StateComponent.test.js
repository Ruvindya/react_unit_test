import { render, fireEvent} from "@testing-library/react";
import StateComponent from "./StateComponent";

test("updates state correctly", () => {
    const { getByTest } = render(<StateComponent />);
    const button = getByTest("Click me");
    fireEvent.click(button);
    expect(getByTest("Clicked!")).toBeInTheDocument();

});