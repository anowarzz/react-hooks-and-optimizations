import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import MultipleStateExample from "./pages/MultipleStateExample";
import UseReducerExample from "./pages/UseReducerExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MultipleStateExample /> */}
      <UseReducerExample />
    </div>
  );
}

export default App;
