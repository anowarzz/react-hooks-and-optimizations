import { useEffect, useState } from "react";

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

  if (isLoading && !error) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
          <p className="text-2xl  m-2 font-semibold">{user?.name}</p>
          <p className="text-xs  m-2 font-semibold">{user?.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersContainer;
