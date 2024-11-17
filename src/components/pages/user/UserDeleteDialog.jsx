import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {deleteUser} from '../../../api/userApi.js';
import {queryClient} from '../../../utils/query.js';

function UserCreateDialog({open, setOpen, selectedSeq}) {
  // 삭제
  const {mutate} = useMutation({
    mutationFn: deleteUser,
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
    mutate(selectedSeq);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>회원 삭제</DialogTitle>
      <DialogContent>
        <Typography variant='subtitle1' color='textSecondary'>
          {`SEQ : ${selectedSeq}`}
        </Typography>
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
