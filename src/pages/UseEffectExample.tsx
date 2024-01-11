import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <h1 className="text-2xl mb-5 font-bold text-red-600">
        Use Effect is running right now
      </h1>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn p-2 m-2 bg-blue-500 text-white"
      >
        {`Click me to ${hidden ? "Show" : "Hide"} Counter`}
      </button>

      {!hidden && <ToDo />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterId = setInterval(() => {
      console.log(count);
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(counterId);
    };
  }, [count]);
  return (
    <h3 className="border-blue-400 border-2 py-2 px-4 my-6 font-bold width">
      {count}
    </h3>
  );
};

const ToDo = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/4")
      .then((res) => res.json())
      .then((data) => alert(data?.title));
  }, []);

  return (
    <div>
      <h2>Todo</h2>
    </div>
  );
};

export default UseEffectExample;
