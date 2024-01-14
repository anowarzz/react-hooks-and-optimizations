
import UserLists from "./UserLists";
import useUsersData from "../hooks/useUsersData";

const UsersContainer = () => {
 
const {isLoading,error, data} = useUsersData() ;


  return <UserLists isLoading={isLoading} error={error} data={data} />;
};

export default UsersContainer;
