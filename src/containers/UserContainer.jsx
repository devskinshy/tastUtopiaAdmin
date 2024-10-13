import {getUsers} from "../api/userApi.js";
import UserTable from "../components/pages/user/UserTable.jsx";
import {useQuery} from "@tanstack/react-query";

function UserContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    initialData: []
  })

  return (
    <UserTable isLoading={isFetching} isError={isError} data={data}/>
  );
}

export default UserContainer;
