import { useState, useEffect } from 'react';
import { CommonTable } from '../components/common/CommonTable';

const columns = ['ID', 'Name', 'Description'];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
  ]);
  const renderActions = (rowData) => (
    <>
      <button onClick={() => alert(`>>>>>> 수정 ${rowData.name}`)}>수정</button>
      <button onClick={() => alert(`>>>>>> 삭제 ${rowData.name}`)}>삭제</button>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const tableConfig = {
    columns, 
    data,
    isLoading,
    renderActions,
    noDataMessage : '테스트 데이터가 없습니다.'
  };

  return (
    <div>
      <h1>Home Page</h1>
      <CommonTable tableConfig={tableConfig} />
    </div>
  );
};

export default HomePage;