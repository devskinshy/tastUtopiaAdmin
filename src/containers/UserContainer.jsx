import {getUsers} from "../api/userApi.js";
import UserTable from "../components/pages/user/UserTable.jsx";
import {useQuery} from "@tanstack/react-query";
import DefaultTableContainer from "../components/ui/table/DefaultTableContainer.jsx";

function UserContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return (
    // <UserTable isLoading={isFetching} isError={isError} data={data}/>
    <DefaultTableContainer isLoading={isFetching} isError={isError} data={data} table={UserTable}/>
  );
}

export default UserContainer;
