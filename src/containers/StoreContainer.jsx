import {getStores} from "../api/storeApi.js";
import StoreTable from "../components/pages/store/StoreTable.jsx";
import {useQuery} from "@tanstack/react-query";
import {Paper} from "@mui/material";
import DefaultTableContainer from "../components/ui/table/DefaultTableContainer.jsx";

function StoreContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['store'],
    queryFn: getStores,
  })

  return (
    <DefaultTableContainer component={Paper} table={StoreTable} isLoading={isFetching} isError={isError} data={data} />
  );
}

export default StoreContainer;
