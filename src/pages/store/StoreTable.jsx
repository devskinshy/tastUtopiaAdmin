import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";

export default function StoreTable({ rows }) {
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

StoreTable.propTypes = {
  rows: PropTypes.array.isRequired,
};
