import PropTypes from 'prop-types';
import Table from '@mui/material/Table';

// 테이블의 기본 구조를 렌더링하는 컴포넌트
export const BaseTable = ({ children, ...tableProps }) => (
  <Table {...tableProps}>{children}</Table>
);

BaseTable.propTypes = {
  children: PropTypes.node,
};