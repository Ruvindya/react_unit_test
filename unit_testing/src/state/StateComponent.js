import { useState } from "react";

const StateComponent = ({ name, age}) => {
    const [state, setState] = useState(false);
    return (
        <div>
            <p>{state ? "Clicked!" : "Please Click"}</p>
            <button onClick={() => setState(true)}>Click me</button>
        </div>

    );
};

export default StateComponent;