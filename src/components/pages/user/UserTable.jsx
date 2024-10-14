import { Paper, Button, Box } from "@mui/material";
import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import DefaultTableContainer from "../../ui/table/DefaultTableContainer.jsx";

function UserTable({isLoading, isError, data}) {
  return (
    <DefaultTableContainer component={Paper} isLoading={isLoading} isError={isError}>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="16px">
        <h1>User Container</h1>
        <Button variant="contained" color="primary">
          유저 추가
        </Button>
      </Box>
      <DefaultTable>
        <DefaultTableHead>
          <DefaultTableRow>
            <DefaultTableCell>seq</DefaultTableCell>
            <DefaultTableCell>id</DefaultTableCell>
            <DefaultTableCell>nick name</DefaultTableCell>
            <DefaultTableCell>email</DefaultTableCell>
            <DefaultTableCell>role</DefaultTableCell>
            <DefaultTableCell>status</DefaultTableCell>
            <DefaultTableCell>create date</DefaultTableCell>
            <DefaultTableCell>update date</DefaultTableCell>
          </DefaultTableRow>
        </DefaultTableHead>
        <DefaultTableBody>
          {data.map(({seq, userId, nickName, email, admin, userStatus, embdate}) => (
            <DefaultTableRow key={seq}>
              <DefaultTableCell>{seq}</DefaultTableCell>
              <DefaultTableCell>{userId}</DefaultTableCell>
              <DefaultTableCell>{nickName}</DefaultTableCell>
              <DefaultTableCell>{email}</DefaultTableCell>
              <DefaultTableCell>{admin}</DefaultTableCell>
              <DefaultTableCell>{userStatus}</DefaultTableCell>
              <DefaultTableCell>{embdate?.createDate}</DefaultTableCell>
              <DefaultTableCell>{embdate?.updateDate}</DefaultTableCell>
            </DefaultTableRow>
          ))}
        </DefaultTableBody>
      </DefaultTable>
    </DefaultTableContainer>
  );
}

export default UserTable;
