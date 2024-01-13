import { useContext, useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import MultipleStateExample from "./pages/MultipleStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseReducerForm from "./pages/UseReducerForm";
import UseEffectExample from "./pages/UseEffectExample";
import UseRefExample from "./pages/UseRefExample";
import UseRefFormExample from "./pages/UseRefFormExample";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";

function App() {
  // const [counter, setCounter] = useState(0);

  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;

  console.log(dark);

  return (
    <div
      className={`w-full flex flex-col justify-center items-center h-screen ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MultipleStateExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerForm /> */}
      {/* <UseEffectExample /> */}
      {/* <UseRefExample /> */}
      <UseRefFormExample />
      <button
        onClick={() => setDark(!dark)}
        className="btn text-xl font-bold bg-cyan-400 p-2 my-4 text-gray-900"
      >
        Toggle Theme
      </button>

      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  );
}

export default App;
