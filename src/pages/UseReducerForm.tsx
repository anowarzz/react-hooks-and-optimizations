import { ChangeEvent, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

type TAction = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const UseReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          id="name"
          name="name"
          className=" border-blue-600 border-2 mx-2"
        />
      </div>
      <div className="my-2">
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="email"
          id="email"
          name="email"
          className=" border-blue-600 border-2 mx-2"
        />
      </div>
      <button type="submit" className="btn btn bg-green-600 mt-1 p-1">
        Submit
      </button>
    </form>
  );
};

export default UseReducerForm;
