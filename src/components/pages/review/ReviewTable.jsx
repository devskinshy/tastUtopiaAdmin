import {Paper} from "@mui/material";
import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import DefaultTableContainer from "../../ui/table/DefaultTableContainer.jsx";

function ReviewTable({isLoading, isError, data}) {
  return (
    <DefaultTableContainer component={Paper} isLoading={isLoading} isError={isError}>
      <DefaultTable>
        <DefaultTableHead>
          <DefaultTableRow>
            <DefaultTableCell>seq</DefaultTableCell>
            <DefaultTableCell>user</DefaultTableCell>
            <DefaultTableCell>store</DefaultTableCell>
            <DefaultTableCell>comment</DefaultTableCell>
            <DefaultTableCell>create date</DefaultTableCell>
            <DefaultTableCell>update date</DefaultTableCell>
          </DefaultTableRow>
        </DefaultTableHead>
        <DefaultTableBody>
          {data.map(({seq, user, store, comment, embDate}) => (
            <DefaultTableRow key={seq}>
              <DefaultTableCell>{seq}</DefaultTableCell>
              <DefaultTableCell>{user}</DefaultTableCell>
              <DefaultTableCell>{store}</DefaultTableCell>
              <DefaultTableCell>{comment}</DefaultTableCell>
              <DefaultTableCell>{embDate?.createDate}</DefaultTableCell>
              <DefaultTableCell>{embDate?.updateDate}</DefaultTableCell>
            </DefaultTableRow>
          ))}
        </DefaultTableBody>
      </DefaultTable>
    </DefaultTableContainer>
  );
}

export default ReviewTable;
