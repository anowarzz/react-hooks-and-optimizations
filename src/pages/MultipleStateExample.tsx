import React, { useState } from "react";

const MultipleStateExample = () => {
  //  ==> control values with multiple states ===>
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  //  ==> controlling state values with object
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ user });
  };

  // DRY ==> Don't Repeat Yourself

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, name: e.target.value });
  // };

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, email: e.target.value });
  // };

  // DRY ==> Don't Repeat Yourself

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
  };

  return (
    <div className="my-2">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className=" border-blue-600 border-2 mx-2"
          />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
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
    </div>
  );
};

export default MultipleStateExample;
