import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";

function createData(
  idx: number,
  id: string,
  email: string,
  postCount: number,
  starAverage: number,
  createdAt: string
) {
  return {
    idx,
    id,
    email,
    postCount,
    starAverage,
    createdAt,
    history: [
      {
        idx: "history-1",
        thumb: "",
        type: "국밥",
        star: 5.0,
        desc: "Lorem ipsum",
        store: "온달토종순댓국",
        location: "서울 송파구 동남로2길 18 1층",
        updatedAt: "2024. 01. 01",
      },
      {
        idx: "history-2",
        thumb: "",
        type: "브런치",
        star: 5.0,
        desc: "Lorem ipsum",
        store: "고탄산",
        location: "서울 송파구 거마로2길 3-5 1층",
        updatedAt: "2024. 01. 01",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.idx}
        </TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.postCount}</TableCell>
        <TableCell align="center">{row.starAverage}</TableCell>
        <TableCell align="center">{row.createdAt}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">썸네일</TableCell>
                    <TableCell align="center">종류</TableCell>
                    <TableCell align="center">별점</TableCell>
                    <TableCell align="center">한줄 설명</TableCell>
                    <TableCell align="center">상호명</TableCell>
                    <TableCell align="center">위치</TableCell>
                    <TableCell align="center">게시일</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.idx}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.thumb}
                      </TableCell>
                      <TableCell align="center">{historyRow.type}</TableCell>
                      <TableCell align="center">{historyRow.star}</TableCell>
                      <TableCell align="center">{historyRow.desc}</TableCell>
                      <TableCell align="center">{historyRow.store}</TableCell>
                      <TableCell align="center">
                        {historyRow.location}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.updatedAt}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(1, "aaa", "aaa@aa.com", 2, 5.0, "2024. 01. 01"),
  createData(2, "abc", "bbb@bb.com", 2, 5.0, "2024. 01. 01"),
  createData(3, "def", "ccc@cc.com", 2, 5.0, "2024. 01. 01"),
  createData(4, "ghi", "ddd@dd.com", 2, 5.0, "2024. 01. 01"),
  createData(5, "jkl", "eee@ee.com", 2, 5.0, "2024. 01. 01"),
];

export default function KTablePage() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>idx</TableCell>
            <TableCell align="center">아이디</TableCell>
            <TableCell align="center">이메일</TableCell>
            <TableCell align="center">맛집 게시 수</TableCell>
            <TableCell align="center">평균 별점</TableCell>
            <TableCell align="center">만든 날짜</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.idx} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// 유저
// - 정지 기능
// 맛집
// - 삭제 기능 (개별 삭제, 선택 삭제)
