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

  const getUserData = () => {
    setLoading(true);
    setError('');

    // 나중에 따로 빼면 좋을 듯
    axios('http://3.35.212.57:8080/user/users')
    .then(response => {
      // console.log(response)
      const result = response.data;
      if ( result.status !== 200 ) {  // 매직 넘버
        throw new Error(`에러가 발생했습니다.`);
      }

      const hasData = result?.data && result.data.length > 0;
      if ( !hasData ) {
        throw new Error(`데이터가 존재하지 않습니다.`);
      }

      setUserData(result.data);
    })
    .catch(err => {
      console.error(err);
      setError(err.message || `에러가 발생했습니다.`); // error code, message 검토 필요
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  // 로딩
  if ( loading ) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  // 에러
  // TODO: 정상 응답 이외는 전부 에러로 간주, response 상태에 따른 에러 처리 필요
  if ( error ) {
    return (
      <Alert
        severity="error"
        action={
          <>
            <Button color="inherit" size="small" onClick={getUserData}>
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
  }
  
  return (
    <UserTable
      userData={userData}
    />
  );
}
