import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ReviewListUI({rows}) {

  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell>순서</TableCell>
            <TableCell >닉네임</TableCell>
            <TableCell >가게 이름</TableCell>
            <TableCell align="left">후기</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            {rows.map((review) => (
                <TableRow key={review.seq}>
                    <TableCell>{review.seq}</TableCell>
                    <TableCell >{review.user}</TableCell>
                    <TableCell >{review.store}</TableCell>
                    <TableCell align="left">{review.comment}</TableCell>
                </TableRow>
            ))}
        </TableBody>

        </Table>
    </TableContainer>
  )
}
