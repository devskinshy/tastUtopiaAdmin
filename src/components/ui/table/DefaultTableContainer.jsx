import {Paper, TableContainer} from "@mui/material";

function DefaultTableContainer({isLoading, isError, data, table : TableComponent,  ...props}) {
  if (isError) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <TableContainer component={Paper} {...props}>
      {TableComponent && <TableComponent data={data}/>}
    </TableContainer>
  );
}

import PropTypes from 'prop-types';

DefaultTableContainer.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  data: PropTypes.array, // 데이터가 배열이라면 PropTypes.array로 지정
  table: PropTypes.elementType.isRequired, // React 컴포넌트 타입을 요구
};

DefaultTableContainer.defaultProps = {
  isLoading: false,
  isError: false,
  data: [],
};

export default DefaultTableContainer;
