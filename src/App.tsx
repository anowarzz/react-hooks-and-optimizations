import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import MultipleStateExample from "./pages/MultipleStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerForm from "./pages/UseReducerForm";
import UseEffectExample from "./pages/UseEffectExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MultipleStateExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerForm /> */}
      <UseEffectExample />
    </div>
  );
}

export default App;
