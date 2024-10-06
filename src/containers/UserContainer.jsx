import {getUsers} from "../api/userApi.js";
import useApi from "../hooks/useApi.js";
import UserTable from "../components/pages/user/UserTable.jsx";

function UserContainer() {
  const [status, data] = useApi(getUsers);

  return (
    <UserTable status={status} data={data}/>
  );
}

export default UserContainer;
