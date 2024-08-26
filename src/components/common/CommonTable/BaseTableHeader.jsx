import PropTypes from 'prop-types';
import { TableHead, TableRow } from '@mui/material';
import { BaseTableCell } from './BaseTableCell';

// 테이블의 헤더를 렌더링
export const BaseTableHeader = ({ config = {}, children, ...headerProps }) => (
  <TableHead {...headerProps}>
    <TableRow>
      {(config.columns || []).map((column, index) => (
        <BaseTableCell key={index}>
          {config.renderHeaderCell ? config.renderHeaderCell(column, index) : column}
        </BaseTableCell>
      ))}
      {children}
    </TableRow>
  </TableHead>
);

BaseTableHeader.propTypes = {
  config: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string, 
      PropTypes.node
    ])),
    renderHeaderCell: PropTypes.func, // 각 헤더 셀의 내용을 커스터마이징하기 위한 함수
  }),
  children: PropTypes.node,
};