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
import Profile from "./pages/Profile";
import GameResults from "./pages/GameResults";
import UsersContainer from "./components/UsersContainer";
import Select from "./components/Select";

function App() {
  // const [counter, setCounter] = useState(0);

  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;


  return (
    <div
      className={`w-full h-full mt-10 flex flex-col justify-center items-center  ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <MultipleStateExample /> */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerForm /> */}
      {/* <UseEffectExample /> */}
      {/* <UseRefExample /> */}
      {/* <UseRefFormExample /> */}
      {/* <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
      <button
        onClick={() => setDark(!dark)}
        className="btn text-xl font-bold bg-cyan-400 p-2 my-4 text-gray-900"
      >
        Toggle Theme
      </button>
      {/* <Profile /> */}
      <GameResults />
      {/* <UsersContainer /> */}
 <Select>
  <Select.SelectOption value="Option 1">Option 1</Select.SelectOption>
  <Select.SelectOption value="Option 2">Option 2</Select.SelectOption>
  <Select.SelectOption value="Option 3">Option 3</Select.SelectOption>
  <Select.SelectOption value="Option 4">Option 4</Select.SelectOption>
 </Select>
    </div>
  );
}

export default App;
