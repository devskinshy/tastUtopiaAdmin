import {Paper} from "@mui/material";
import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import DefaultTableContainer from "../../ui/table/DefaultTableContainer.jsx";

function UserTable({status, data}) {
  return (
    <DefaultTableContainer component={Paper} status={status}>
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
