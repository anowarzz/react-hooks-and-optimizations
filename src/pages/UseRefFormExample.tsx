import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefFormExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef?.current?.focus();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-mono text-blue-800 font-semibold mb-4">
        UseRef Form
      </h3>

      <form>
        {/* <input
          ref={myRef}
          type="text"
          name="name"
          id="name"
          className="border border-red-500 block"
        /> */}

        <CustomInput ref={myRef} className="border border-cyan-500" />

        <button
          type="submit"
          className="inline btn p-2 bg-blue-600 mt-3 text-white"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefFormExample;
