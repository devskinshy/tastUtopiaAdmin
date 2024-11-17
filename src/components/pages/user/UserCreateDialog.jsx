import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {createUser} from '../../../api/userApi.js';
import {queryClient} from '../../../utils/query.js';

function UserCreateDialog({open, setOpen}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // 추가
  const {mutate} = useMutation({
    mutationFn: createUser,
    onSettled: (data, error) => {
      console.log('settled data', data?.data);
      console.log('settled error', error?.data);
    },
    onSuccess: (data, variables, context) => {
      console.log('success', data, variables, context);
      
      // post가 성공하면 users로 맵핑된 useQuery api 실행.
      queryClient.invalidateQueries('users');
    },
    // onError: (error, variable, context) => {
    //   console.log(error);
    // },
  });

  // 저장 버튼 클릭 시 호출될 함수
  const handleSave = () => {
    mutate({
      userId: id,
      pwd: password,
      nickName: nickname,
      email: email,
    });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>회원 추가</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='아이디'
          type='text'
          fullWidth
          variant='outlined'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='패스워드'
          type='password'
          fullWidth
          variant='outlined'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          autoFocus
          margin='dense'
          label='닉네임'
          type='nickname'
          fullWidth
          variant='outlined'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <TextField
          margin='dense'
          label='이메일'
          type='email'
          fullWidth
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          취소
        </Button>
        <Button onClick={handleSave} color='primary' variant='contained'>
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserCreateDialog;
