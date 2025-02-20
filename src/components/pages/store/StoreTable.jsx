import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import PropTypes from "prop-types";

function StoreTable({data}) {
  return (
    <DefaultTable>
      <DefaultTableHead>
        <DefaultTableRow>
          <DefaultTableCell>seq</DefaultTableCell>
          <DefaultTableCell>kakao idx</DefaultTableCell>
          <DefaultTableCell>store name</DefaultTableCell>
          <DefaultTableCell>category</DefaultTableCell>
          <DefaultTableCell>latitude</DefaultTableCell>
          <DefaultTableCell>longitude</DefaultTableCell>
          <DefaultTableCell>region</DefaultTableCell>
          <DefaultTableCell>detail address</DefaultTableCell>
          <DefaultTableCell>zipcode</DefaultTableCell>
          <DefaultTableCell>create date</DefaultTableCell>
          <DefaultTableCell>update date</DefaultTableCell>
        </DefaultTableRow>
      </DefaultTableHead>
      <DefaultTableBody>
        {data.map(({seq, kakaoIdx, storeName, category, latitude, longitude, region, detailAddress, zipcode, embdate}) => (
          <DefaultTableRow key={seq}>
            <DefaultTableCell>{seq}</DefaultTableCell>
            <DefaultTableCell>{kakaoIdx}</DefaultTableCell>
            <DefaultTableCell>{storeName}</DefaultTableCell>
            <DefaultTableCell>{category}</DefaultTableCell>
            <DefaultTableCell>{latitude}</DefaultTableCell>
            <DefaultTableCell>{longitude}</DefaultTableCell>
            <DefaultTableCell>{region}</DefaultTableCell>
            <DefaultTableCell>{detailAddress}</DefaultTableCell>
            <DefaultTableCell>{zipcode}</DefaultTableCell>
            <DefaultTableCell>{embdate?.createDate}</DefaultTableCell>
            <DefaultTableCell>{embdate?.updateDate}</DefaultTableCell>
          </DefaultTableRow>
        ))}
      </DefaultTableBody>
    </DefaultTable>
  );
}

StoreTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      seq: PropTypes.number.isRequired,
      kakaoIdx: PropTypes.string.isRequired,
      storeName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      region: PropTypes.string,
      detailAddress: PropTypes.string,
      zipcode: PropTypes.string,
      embdate: PropTypes.shape({
        createDate: PropTypes.string,
        updateDate: PropTypes.string,
      }),
    }).isRequired
  ).isRequired,
};

export default StoreTable;
