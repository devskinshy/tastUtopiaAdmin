import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";

function UserTable({data}) {
  return (
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
  );
}

import PropTypes from "prop-types";

UserTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      seq: PropTypes.number.isRequired,
      userId: PropTypes.string.isRequired,
      nickName: PropTypes.string,
      email: PropTypes.string,
      admin: PropTypes.bool,
      userStatus: PropTypes.string,
      embdate: PropTypes.shape({
        createDate: PropTypes.string,
        updateDate: PropTypes.string,
      }),
    })
  ),
};

export default UserTable;
