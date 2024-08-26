import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';

import { BaseTableCell } from './BaseTableCell';

// 테이블의 각 행을 렌더링
export const BaseTableRow = ({ config = {}, children, ...rowProps }) => (
  <TableRow {...rowProps}>
    {Object.keys(config.rowData || {}).map((key, index) => (
      <BaseTableCell key={index}>
        {config.renderCell ? config.renderCell(config.rowData[key], key, config.rowData) : config.rowData[key]}
      </BaseTableCell>
    ))}
    {config.renderActions && (
      <BaseTableCell>{config.renderActions(config.rowData)}</BaseTableCell>
    )}
    {children}
  </TableRow>
);

BaseTableRow.propTypes = {
  config: PropTypes.shape({
    rowData: PropTypes.object, // 행에 해당하는 데이터 객체
    renderCell: PropTypes.func, // 각 셀의 내용을 커스터마이징하기 위한 함수
    renderActions: PropTypes.func, // 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
  }),
  children: PropTypes.node, // 추가적인 자식 요소
};