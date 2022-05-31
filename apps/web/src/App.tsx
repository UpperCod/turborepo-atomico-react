import { render } from "react-dom";
import "@component/component-1";

function App() {
    return (
        <>
            <h1>React app</h1>
        </>
    );
}

render(<App></App>, document.querySelector("#app"));
