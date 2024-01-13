import { useRef, useState } from "react";

const UseRefExample = () => {
  const myRef = useRef(0);
  const [count, setCount] = useState(0);
  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
    console.log("myState =>", count);
    console.log("myRef =>", myRef.current);
  };

  return (
    <div>
      <h2 className="text-2xl text-black bg-yellow-600 p-2 font-mono rounded ">
        Use Ref Hook is running
      </h2>

      <button
        className="btn border-2 border-green-400 mt-4 py-2 px-3 bg-red-950 text-white rounded-sm"
        onClick={() => increment()}
      >
        {" "}
        Increment
      </button>

      <p className="my-2 p-2 font-bold text-2xl">{count}</p>
    </div>
  );
};

export default UseRefExample;
