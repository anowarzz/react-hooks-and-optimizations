const UserLists = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong !</p>;
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

export default UserLists;
