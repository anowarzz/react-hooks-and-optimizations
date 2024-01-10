import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("Inside this clean up , i feel free");
    };
  }, [hidden]);

  return (
    <div>
      <h1>Use Effect is running right now</h1>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn p-2 m-2 bg-blue-500 text-white"
      >
        Click me please
      </button>
    </div>
  );
};

export default UseEffectExample;
