import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
// import axios from 'axios';

async function fetchData() {
    try {
    //   const response = await axios.get('http://3.35.212.57:8080/store/stores');
    const response = {
        "status": 200,
        "code": "SUCCESS",
        "message": null,
        "data": [
          {
            "seq": 252,
            "kakaoIdx": "12334",
            "storeName": "rang",
            "category": "food",
            "latitude": 37.5283169,
            "longitude": 126.9294254,
            "region": "seoul",
            "detailAddress": "gangnam",
            "zipcode": "04527"
          },
          {
            "seq": 253,
            "kakaoIdx": "004432",
            "storeName": "맛집이요",
            "category": "분식",
            "latitude": 37.5283169,
            "longitude": 126.9294254,
            "region": "경기",
            "detailAddress": "고양시",
            "zipcode": "04527"
          },
          {
            "seq": 302,
            "kakaoIdx": "string",
            "storeName": "수정2",
            "category": "수정2",
            "latitude": 37.52,
            "longitude": 0,
            "region": "string",
            "detailAddress": "string",
            "zipcode": "string"
          },
          {
            "seq": 352,
            "kakaoIdx": "",
            "storeName": "test",
            "category": "test",
            "latitude": 37.5283169,
            "longitude": 126.9294254,
            "region": "경기",
            "detailAddress": "고양시",
            "zipcode": "04527"
          },
          {
            "seq": 402,
            "kakaoIdx": "0000",
            "storeName": "맛집이요",
            "category": "test1",
            "latitude": 37.5283169,
            "longitude": 126.9294254,
            "region": "경기",
            "detailAddress": "고양시",
            "zipcode": "04527"
          },
          {
            "seq": 452,
            "kakaoIdx": "kakao-01",
            "storeName": "KFC 명지대점",
            "category": "버거",
            "latitude": 0,
            "longitude": 0,
            "region": null,
            "detailAddress": null,
            "zipcode": null
          }
        ]
      };
      return response.data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
  const rows = await fetchData();

export default function StorePage() {
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
    )
  }
  