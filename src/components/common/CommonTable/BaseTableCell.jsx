import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';

// 테이블의 개별 셀을 렌더링하는 컴포넌트
export const BaseTableCell = ({ children, ...cellProps }) => (
  <TableCell {...cellProps}>{children}</TableCell>
);

BaseTableCell.propTypes = {
  children: PropTypes.node,
};