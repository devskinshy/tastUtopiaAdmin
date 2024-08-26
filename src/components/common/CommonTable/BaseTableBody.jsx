import PropTypes from 'prop-types';
import { TableBody, TableRow, TableCell, Typography, Skeleton } from '@mui/material';
import { BaseTableRow } from './BaseTableRow';

// 테이블의 바디를 렌더링하는 컴포넌트
export const BaseTableBody = ({ config = {}, ...bodyProps }) => (
  <TableBody {...bodyProps}>
    {config.isLoading ? (
      Array.from({ length: 5 }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {(config.columns || []).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton variant="rectangular" width="100%" height={30} />
            </TableCell>
          ))}
        </TableRow>
      ))
    ) : config.data && config.data.length > 0 ? (
      config.data.map((row, index) => (
        <BaseTableRow
          key={index}
          config={{ ...config, rowData: row }}
        />
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={(config.columns || []).length || 1}>
          <Typography align="center" color="textSecondary">
            {config.noDataMessage || "데이터 값이 없습니다"}
          </Typography>
        </TableCell>
      </TableRow>
    )}
  </TableBody>
);

BaseTableBody.propTypes = {
  config: PropTypes.shape({
    isLoading: PropTypes.bool, // 데이터 로딩 상태를 나타내는 플래그
    data: PropTypes.arrayOf(PropTypes.object), // 각 행에 대한 데이터 객체 배열
    renderRow: PropTypes.func, // 각 행을 커스터마이징하기 위한 함수
    renderCell: PropTypes.func, // 각 셀을 커스터마이징하기 위한 함수
    renderActions: PropTypes.func, // 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
    onRowClick: PropTypes.func, // 각 행을 클릭했을 때 호출될 함수
    noDataMessage: PropTypes.string, // 데이터가 없을 때 표시할 메시지
    columns: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
      ])
    ),
  }),
};
