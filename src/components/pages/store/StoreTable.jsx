import { Paper, Button, Box } from "@mui/material";
import DefaultTable from "../../ui/table/DefaultTable.jsx";
import DefaultTableHead from "../../ui/table/DefaultTableHead.jsx";
import DefaultTableRow from "../../ui/table/DefaultTableRow.jsx";
import DefaultTableCell from "../../ui/table/DefaultTableCell.jsx";
import DefaultTableBody from "../../ui/table/DefaultTableBody.jsx";
import DefaultTableContainer from "../../ui/table/DefaultTableContainer.jsx";

function StoreTable({ isLoading, isError, data, onAdd, onEdit, onDelete }) {
  return (
    <DefaultTableContainer component={Paper} isLoading={isLoading} isError={isError}>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="16px">
        <h1>Store Container (CRUD 적용)</h1>
        <Button onClick={onAdd} variant="contained" color="primary">
          가게 추가
        </Button>
      </Box>

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
            <DefaultTableCell>createDate</DefaultTableCell>
            <DefaultTableCell>updateDate</DefaultTableCell>
            <DefaultTableCell>actions</DefaultTableCell>
          </DefaultTableRow>
        </DefaultTableHead>

        <DefaultTableBody>
          {data.map((store) => (
            <DefaultTableRow key={store.seq}>
              <DefaultTableCell>{store.seq}</DefaultTableCell>
              <DefaultTableCell>{store.kakaoIdx}</DefaultTableCell>
              <DefaultTableCell>{store.storeName}</DefaultTableCell>
              <DefaultTableCell>{store.category}</DefaultTableCell>
              <DefaultTableCell>{store.latitude}</DefaultTableCell>
              <DefaultTableCell>{store.longitude}</DefaultTableCell>
              <DefaultTableCell>{store.region}</DefaultTableCell>
              <DefaultTableCell>{store.detailAddress}</DefaultTableCell>
              <DefaultTableCell>{store.zipcode}</DefaultTableCell>
              <DefaultTableCell>{store.createDate}</DefaultTableCell>
              <DefaultTableCell>{store.updateDate}</DefaultTableCell>
              <DefaultTableCell>
                <Button onClick={() => onEdit(store)} variant="outlined" color="primary">
                  수정
                </Button>
                <Button
                  onClick={() => onDelete(store)}
                  variant="outlined"
                  color="secondary"
                  style={{ marginLeft: "8px" }}
                >
                  삭제
                </Button>
              </DefaultTableCell>
            </DefaultTableRow>
          ))}
        </DefaultTableBody>
      </DefaultTable>
    </DefaultTableContainer>
  );
}

export default StoreTable;
