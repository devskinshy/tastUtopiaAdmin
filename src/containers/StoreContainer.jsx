import {getStores} from "../api/storeApi.js";
import StoreTable from "../components/pages/store/StoreTable.jsx";
import {useQuery} from "@tanstack/react-query";

function StoreContainer() {
  const {data, isFetching, isError} = useQuery({
    queryKey: ['store'],
    queryFn: getStores,
    initialData: []
  })

  return (
    <StoreTable isLoading={isFetching} isError={isError} data={data}/>
  );
}

export default StoreContainer;
