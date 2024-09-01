import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
  Box,
  CircularProgress,
  Alert,
  Button,
} from '@mui/material';
import UserTable from './UserTable';

export default function UserApi() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getUserData = (url) => {
    // 나중에 따로 빼면 좋을 듯
    axios(url)
    .then(response => {
      // console.log(response)
      const result = response.data?.data;
      (!result || result.length > 0) ? setUserData(result) : setError(`데이터가 존재하지 않습니다.`);
    })
    .catch(err => {
      console.error(err);
      setError(`에러가 발생했습니다.`); // error code, message 검토 필요
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const retryUserData = () => {
    setLoading(true);
    setError('');
    getUserData('http://3.35.212.57:8080/user/users');
  };

  useEffect(() => {
    getUserData('http://3.35.212.57:8080/user/users');
  }, []);

  // 로딩
  if ( loading ) return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <CircularProgress />
    </Box>
  );

  // 에러
  if ( error ) return (
    <Alert
      severity="error"
      action={
        <>
          <Button color="inherit" size="small" onClick={retryUserData}>
            다시 시도
          </Button>
          <Button color="inherit" size="small" onClick={() => navigate(-1)}>
            뒤로 가기
          </Button>
        </>
      }
    >
      {error}
    </Alert>
  );
  
  return (
    <UserTable
      userData={userData}
    />
  );
}
