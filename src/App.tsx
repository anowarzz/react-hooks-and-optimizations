import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
