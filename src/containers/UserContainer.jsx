import {getUsers} from "../api/userApi.js";
import UserTable from "../components/pages/user/UserTable.jsx";
import {useQuery} from "@tanstack/react-query";
import DefaultTableContainer from "../components/ui/table/DefaultTableContainer.jsx";
import {Paper} from "@mui/material";

function UserContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  return (
    <DefaultTableContainer component={Paper} table={UserTable} isLoading={isFetching} isError={isError} data={data} />
  );
}

export default UserContainer;
