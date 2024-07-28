import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (이름, 칼로리, 지방, 탄수화물, 단백질) => {
  return { 이름, 칼로리, 지방, 탄수화물, 단백질 };
}

const rows = [
  createData('기모찌찌', 159, 6.0, 24, 4.0),
  createData('기모찌찌찌', 237, 9.0, 37, 4.3),
  createData('에클레어', 262, 16.0, 24, 6.0),
  createData('컵케이크', 305, 3.7, 67, 4.3),
  createData('생강빵', 356, 16.0, 49, 3.9),
];

const TestTablePage = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>디저트 (100g 제공량)</TableCell>
            <TableCell align="right">칼로리</TableCell>
            <TableCell align="right">지방&nbsp;(g)</TableCell>
            <TableCell align="right">탄수화물&nbsp;(g)</TableCell>
            <TableCell align="right">단백질&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.이름}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.이름}
              </TableCell>
              <TableCell align="right">{row.칼로리}</TableCell>
              <TableCell align="right">{row.지방}</TableCell>
              <TableCell align="right">{row.탄수화물}</TableCell>
              <TableCell align="right">{row.단백질}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TestTablePage;
