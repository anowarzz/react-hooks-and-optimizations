import { useEffect, useState } from "react";
import UserLists from "./UserLists";

const UsersContainer = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    setisLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setData(data);
      setisLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <UserLists isLoading={isLoading} error={error} data={data} />;
};

export default UsersContainer;
