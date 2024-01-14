import { useEffect, useState } from "react";

const useUsersData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const controller = new AbortController();

  const getUsers = async () => {
    setisLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      console.log(data);
      setData(data);
      setisLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, error, data };
};

export default useUsersData;
