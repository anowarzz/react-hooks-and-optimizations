import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import MultipleStateExample from "./pages/MultipleStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerForm from "./pages/UseReducerForm";
import UseEffectExample from "./pages/UseEffectExample";
import UseRefExample from "./pages/UseRefExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MultipleStateExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerForm /> */}
      {/* <UseEffectExample /> */}
      <UseRefExample />
    </div>
  );
}

export default App;
