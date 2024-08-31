import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useEffect, useState } from "react";

export default function usersListUI({rows}) {
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