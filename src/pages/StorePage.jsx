import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StorePage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://3.35.212.57:8080/store/stores")
      .then((response) => {
        const result = response.data;
        setRows(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Store Error:: ", error.message);
        setRows(null);
        setError(true);
      });
  }, []);

  const handleClose = () => {
    setError(false);
    navigate("/", { replace: true });
  };

  if (!rows) {
    return (
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
  if (loading) {
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>순서</TableCell>
            <TableCell align="right">카카오 idx</TableCell>
            <TableCell align="right">가게 이름</TableCell>
            <TableCell align="right">카테고리</TableCell>
            <TableCell align="right">위도</TableCell>
            <TableCell align="right">경도</TableCell>
            <TableCell align="right">지역</TableCell>
            <TableCell align="right">상세 주소</TableCell>
            <TableCell align="right">ZipCode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.kakaoIdx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.seq}
              </TableCell>
              <TableCell align="right">{row.kakaoIdx}</TableCell>
              <TableCell align="right">{row.storeName}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.region}</TableCell>
              <TableCell align="right">{row.detailAddress}</TableCell>
              <TableCell align="right">{row.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
