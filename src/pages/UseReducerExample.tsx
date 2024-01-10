import { useReducer } from "react";

const UseReducerExample = () => {
  const initialState = { count: 0 };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return { count: currentState.count + 1 };

      case "decrement":
        return { count: currentState.count - 1 };

      default:
        return currentState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-3xl font-bold">{state.count}</h1>

      <button
        onClick={() => dispatch({ type: "increment" })}
        className="p-1 m-2 border-2 bg-blue-600"
      >
        Increment 1{" "}
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="p-1 m-2 border-2 bg-red-500"
      >
        Decrement 1{" "}
      </button>
    </div>
  );
};

export default UseReducerExample;
