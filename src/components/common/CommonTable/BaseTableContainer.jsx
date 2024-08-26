import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

import { BaseTable } from './BaseTable';
import { BaseTableHeader } from './BaseTableHeader';
import { BaseTableBody } from './BaseTableBody';

// 테이블 전체를 감싸는 컨테이너 컴포넌트
const BaseTableContainer = ({
  tableConfig = {}, 
  children,
  ...containerProps
}) => (
  <Paper {...containerProps}>
    <BaseTable>
      <BaseTableHeader config={tableConfig} />
      <BaseTableBody config={tableConfig} />
      {children}
    </BaseTable>
  </Paper>
);

BaseTableContainer.propTypes = {
  tableConfig: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node  
      ])
    ),
    data: PropTypes.arrayOf(PropTypes.object), // 각 행에 대한 데이터 객체 배열
    renderHeaderCell: PropTypes.func, // 각 헤더 셀의 내용을 커스터마이징하기 위한 함수
    renderCell: PropTypes.func, // 각 셀의 내용을 커스터마이징하기 위한 함수
    renderActions: PropTypes.func, // 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
    onRowClick: PropTypes.func, // 각 행을 클릭했을 때 호출될 함수
    noDataMessage: PropTypes.string, // 데이터가 없을 때 표시할 메시지
    isLoading: PropTypes.bool, // 로딩 상태를 나타내는 플래그
  }),
  children: PropTypes.node,
};

export default BaseTableContainer;