import {getStores} from "../api/storeApi.js";
import useApi from "../hooks/useApi.js";
import StoreTable from "../components/pages/store/StoreTable.jsx";

function StoreContainer() {
  const [status, data] = useApi(getStores);

  return (
    <StoreTable status={status} data={data}/>
  );
}

export default StoreContainer;
