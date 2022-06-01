import { render } from "react-dom";
import { Brand } from "@component/component-1/react";

function App() {
    return (
        <>
            <h1>React app</h1>
            <Brand color="tomato"></Brand>
        </>
    );
}

render(<App></App>, document.querySelector("#app"));
