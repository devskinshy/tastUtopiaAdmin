# 🔍 CommonTable

# 📝 개요

`CommonTable`은 다양한 데이터 테이블을 렌더링하기 위한 재사용 가능한 컴포넌트입니다.

<br /><br />


# 🧱 컴포넌트 설명



### 1. `BaseTable`

- **컴포넌트 역할**
  - 테이블의 기본 구조를 제공하며, 자식 요소로 테이블의 내용을 구성합니다.

- **Props**
  - **`children`**: 테이블의 자식 요소
  - **`...tableProps`**: `Table` 컴포넌트의 모든 props

<br />



### 2. `BaseTableHeader`

- **컴포넌트 역할**
  - 테이블의 헤더를 렌더링하며, 테이블의 각 열에 해당하는 셀을 구성합니다.

- **Props**
  - **`config`**: 헤더 설정을 포함하는 객체로, 다음과 같은 속성을 가질 수 있습니다:
    - **`columns`**: 테이블 헤더의 각 열에 해당하는 값들의 배열 (문자열 또는 JSX 요소).
    - **`renderHeaderCell`**: 각 헤더 셀의 내용을 커스터마이징하기 위한 함수.
  - **`children`**: 추가적인 헤더 요소를 자식으로 받을 수 있습니다.

<br />



### 3. `BaseTableBody`

- **컴포넌트 역할**  
  테이블의 바디를 렌더링하며, 테이블의 각 행을 구성합니다. 로딩 상태에서는 Skeleton UI를, 데이터가 없을 경우에는 메시지를 표시할 수 있습니다.

- **Props**
  - **`config`**: 바디 설정을 포함하는 객체로, 다음과 같은 속성을 가질 수 있습니다:
    - **`isLoading`**: 데이터 로딩 상태를 나타내는 플래그 (`true`일 경우 Skeleton UI가 표시됨)
    - **`data`**: 각 행에 대한 데이터 객체 배열
    - **`renderRow`**: 각 행을 커스터마이징하기 위한 함수
    - **`renderCell`**: 각 셀의 내용을 커스터마이징하기 위한 함수
    - **`renderActions`**: 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
    - **`onRowClick`**: 각 행을 클릭했을 때 호출될 함수
    - **`noDataMessage`**: 데이터가 없을 때 표시할 메시지
    - **`columns`**: 테이블 헤더의 각 열에 해당하는 값들의 배열 (문자열 또는 JSX 요소)

<br />



### 4. `BaseTableRow`

- **컴포넌트 역할**  
  테이블의 각 행을 렌더링하며, 각 행의 데이터를 셀로 구성합니다. 
  필요에 따라 각 셀의 내용을 커스터마이징하거나, 행에 대한 추가적인 액션을 추가할 수 있습니다.

- **Props**
  - **`config`**: 행 설정을 포함하는 객체로, 다음과 같은 속성을 가질 수 있습니다:
    - **`rowData`**: 행에 해당하는 데이터 객체
    - **`renderCell`**: 각 셀의 내용을 커스터마이징하기 위한 함수
    - **`renderActions`**: 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
  - **`children`**: 추가적인 자식 요소를 자식으로 받을 수 있습니다

<br />



### 5. `BaseTableCell`

- **컴포넌트 역할**  
  테이블의 개별 셀을 렌더링하며, 테이블의 각 셀에 들어갈 내용을 표시합니다. `TableCell` 컴포넌트를 감싸고 있으며, 추가적인 props를 전달할 수 있습니다.

- **Props**
  - **`children`**: 셀에 표시할 내용으로, 문자열, 숫자, JSX 요소 등 다양한 타입을 자식 요소로 받을 수 있습니다.
  - **`...cellProps`**: `TableCell` 컴포넌트에 전달할 수 있는 모든 props를 지원합니다.

<br />



### 6. `BaseTableContainer`

- **컴포넌트 역할**  
  테이블 전체를 감싸는 컨테이너 컴포넌트입니다. `BaseTable`, `BaseTableHeader`, `BaseTableBody` 등의 컴포넌트를 조합하여 테이블의 전체 레이아웃을 구성합니다. `Paper` 컴포넌트를 사용하여 테이블을 감싸고 스타일을 제공합니다.

- **Props**
  - **`tableConfig`**: 테이블 설정을 포함하는 객체로, 다음과 같은 속성을 가질 수 있습니다:
    - **`columns`**: 테이블 헤더의 각 열에 해당하는 값들의 배열
    - **`data`**: 각 행에 대한 데이터 객체 배열
    - **`renderHeaderCell`**: 각 헤더 셀의 내용을 커스터마이징하기 위한 함수
    - **`renderCell`**: 각 셀의 내용을 커스터마이징하기 위한 함수
    - **`renderActions`**: 행에 대한 추가적인 액션 셀을 렌더링하기 위한 함수
    - **`onRowClick`**: 각 행을 클릭했을 때 호출될 함수
    - **`noDataMessage`**: 데이터가 없을 때 표시할 메시지
    - **`isLoading`**: 로딩 상태를 나타내는 플래그 (`true`일 경우 로딩 중임을 나타내는 UI가 표시됨)
  - **`children`**: 추가적인 자식 요소를 자식으로 받을 수 있습니다
  - **`...containerProps`**: `Paper` 컴포넌트에 전달할 수 있는 모든 props를 지원합니다


<br /><br />


# 💡 사용 예시

```jsx
...
import { CommonTable } from './components/common/CommonTable';

const columns = ['ID', 'Name', 'Description'];

const TableTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderActions = (rowData) => (
    <>
      <button onClick={() => alert(`>>>>>> 수정 ${rowData.name}`)}>수정</button>
      <button onClick={() => alert(`>>>>>> 삭제 ${rowData.name}`)}>삭제</button>
    </>
  );

  const tableConfig = {
    columns, 
    data,
    isLoading,
    renderActions,
    noDataMessage : '테스트 데이터가 없습니다.'
  };

  return (
    <CommonTable
      tableConfig={tableConfig}
    />
  );
};
...
```