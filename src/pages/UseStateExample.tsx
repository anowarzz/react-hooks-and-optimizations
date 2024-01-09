import { Dispatch } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  console.log("Render");

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };
  return (
    <div>
      <h1 className="text-3xl my-2 font-bold">{counter}</h1>

      <button
        className="btn m-2 border-2 p-2 bg-blue-500 text-white"
        onClick={() => setCounter(counter + 1)}
      >
        Increment 1
      </button>
      <button
        className="btn m-2 border-2 p-2 bg-red-500 text-black"
        onClick={handleAsyncIncrement}
      >
        Async Increment 1
      </button>
      <button
        className="btn m-2 border-2 p-2 bg-green-500 text-white"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateExample;
