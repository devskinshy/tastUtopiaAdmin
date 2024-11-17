import {getUsers} from '../api/userApi.js';
import UserTable from '../components/pages/user/UserTable.jsx';
import UserCreateButton from '../components/pages/user/UserCreateButton.jsx';
import UserUpdateButton from '../components/pages/user/UserUpdateButton.jsx';
import UserDeleteButton from '../components/pages/user/UserDeleteButton.jsx';
// import UserDeleteButton from '../components/pages/user/UserDeleteButton.jsx';
import {useQuery} from '@tanstack/react-query';
import { useState } from 'react';

function UserContainer() {
  const [selectedSeq, setSelectedSeq] = useState(null);

  const {data, isFetching, isError} = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    initialData: [],
    staleTime: 0,
    gcTime: 3 * 1000,
  });

  return (
    <>
      <UserCreateButton/>
      <UserUpdateButton selectedSeq={selectedSeq}/>
      <UserDeleteButton selectedSeq={selectedSeq}/>
      <UserTable isLoading={isFetching} isError={isError} data={data} selectedSeq={selectedSeq} setSelectedSeq={setSelectedSeq}/>
    </>
  );
}

export default UserContainer;
