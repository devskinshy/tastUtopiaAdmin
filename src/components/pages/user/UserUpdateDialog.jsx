import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {getUser, updateUser} from '../../../api/userApi.js';
import {queryClient} from '../../../utils/query.js';

function UserUpdateDialog({open, setOpen, selectedSeq}) {
  const [seq, setSeq] = useState(selectedSeq);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState('');
  const [status, setStatus] = useState('N');

  useEffect(() => {
    if (open && selectedSeq) {
      getUser(selectedSeq)
      .then((data) => {
        setSeq(data.seq);
        setId(data.userId);
        setNickname(data.nickName);
        setEmail(data.email);
        setAdmin(data.admin);
        setStatus(data.userStatus);
      });
    }
  }, [open, selectedSeq]);
  
  // 수정
  const {mutate} = useMutation({
    mutationFn: updateUser,
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
      seq: seq,
      pwd: password,
      nickName: nickname,
      email: email,
      admin: "USER",
      userStatus: status,
    });
    setOpen(false);
  };

  const handleSelectChange = (e) => {
    setStatus(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>회원 수정</DialogTitle>
      <DialogContent>
        <Typography variant='subtitle1' color='textSecondary'>
          {`SEQ : ${seq}`}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          {`ID : ${id}`}
        </Typography>
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
        <TextField
          margin='dense'
          label='관리자'
          type='admin'
          fullWidth
          variant='outlined'
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
        />
        <FormControl
          fullWidth
          margin='dense'
        >
          <InputLabel>사용 여부</InputLabel>
          <Select
            value={status}
            label='사용 여부'
            onChange={handleSelectChange}
          >
            <MenuItem value='Y'>사용</MenuItem>
            <MenuItem value='N'>미사용</MenuItem>
          </Select>
        </FormControl>
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

export default UserUpdateDialog;
