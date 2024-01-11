import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Render");
  }, [user.name, user.email]);

  return (
    <div>
      <h1 className="text-2xl mb-5 font-bold text-red-600">
        Use Effect is running right now
      </h1>

      <input
        name="name"
        id="name"
        placeholder="Name"
        autoComplete="off"
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        className="border-2 border-blue-300 p-1 m-4"
      />
      <input
        name="email"
        id="email"
        placeholder="Email"
        autoComplete="off"
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        className="border-2 border-blue-300 p-1 m-4"
      />
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
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/4", { signal })
      .then((res) => res.json())
      .then((data) => alert(data?.title));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Todo</h2>
    </div>
  );
};

export default UseEffectExample;
