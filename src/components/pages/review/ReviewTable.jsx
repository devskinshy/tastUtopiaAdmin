import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import PropTypes from "prop-types";

function ReviewTable({data}) {
  return (
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
  );
}

ReviewTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      seq: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      user: PropTypes.string.isRequired,
      store: PropTypes.string.isRequired,
      comment: PropTypes.string,
      embDate: PropTypes.shape({
        createDate: PropTypes.string,
        updateDate: PropTypes.string,
      }),
    })
  ),
};

export default ReviewTable;
