
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';

import axios from "axios";

export function test1(){
  return alert("test1");  
};

export function test2(temp){
  alert("test2"+temp);
};

export default function BasicTable() {
  const [status, setStatus] = useState('');
  const [code, setCode] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const url ="http://3.35.212.57:8080/user/users";

  //컴포넌트가 마운트 됐을때  
   useEffect(() => {
      axios({
        method: 'get'
        ,url: url
        //,params:{}
        //,headers:{}
      })
      .then((response)=>{
        const result = response.data;
        setRows(result.data);
        setCode(result.code);
        setStatus(result.status);
        setLoading(false);
      })
      .catch((error)=>{
        console.log("Store Error:: ", error.message);
        setRows(null);
        setError(true);
      })

   },[])
  
   const handleClose = () => {
    setError(false);
    navigate("/", { replace: true });
  };
  
  if(loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if(code == 'SUCCESS'){
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>사용자ID</TableCell>
              <TableCell align="right">별명</TableCell>
              <TableCell align="right">이메일</TableCell>
              <TableCell align="right">생성일자</TableCell>
              <TableCell align="right">업데이트일자</TableCell>
              <TableCell align="right">사용자종류</TableCell>
              <TableCell align="right">사용여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.seq}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.userId}</TableCell>
                <TableCell align="right">{row.nickName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.embdate.createDate}</TableCell>
                <TableCell align="right">{row.embdate.updateDate}</TableCell>
                <TableCell align="right">{row.admin}</TableCell>
                <TableCell align="right">{row.userStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  else {
    return (
      //에러 코드에 따라 달라짐
      alert('100'),
      <Dialog
        open={error}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"예기치 못한 에러가 발생했습니다."}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    );
  }


  
}