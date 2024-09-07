import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import PropTypes from "prop-types";

export default function UserTable({userData}) {
  const convertDatetime = (datetime) => {
    if ( !datetime ) return '';

    const date = new Date(datetime);
    return (
      date.getFullYear().toString() + '-' +
      date.getMonth().toString().padStart(2, '0') + '-' +
      date.getDate().toString().padStart(2, '0') + ' ' +
      date.getHours().toString().padStart(2, '0') + ':' +
      date.getMinutes().toString().padStart(2, '0') + ':' +
      date.getSeconds().toString().padStart(2, '0')
    );
  };

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='right'>seq</TableCell>
            <TableCell align='right'>userId</TableCell>
            <TableCell align='right'>nickName</TableCell>
            <TableCell align='right'>email</TableCell>
            <TableCell align='right'>userStatus</TableCell>
            <TableCell align='right'>admin</TableCell>
            <TableCell align='right'>createDate</TableCell>
            <TableCell align='right'>updateDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            userData.map(user => (
              <TableRow key={user.seq}>
                <TableCell align='right'>{user.seq}</TableCell>
                <TableCell align='right'>{user.userId}</TableCell>
                <TableCell align='right'>{user.nickName}</TableCell>
                <TableCell align='right'>{user.email}</TableCell>
                <TableCell align='right'>{user.userStatus}</TableCell>
                <TableCell align='right'>{user.admin}</TableCell>
                <TableCell align='right'>{convertDatetime(user.embdate.createDate)}</TableCell>
                <TableCell align='right'>{convertDatetime(user.embdate.updateDate)}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

UserTable.propTypes = {
  userData: PropTypes.array.isRequired,
};
