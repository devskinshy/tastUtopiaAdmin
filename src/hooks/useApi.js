import {useCallback, useEffect, useState} from "react";
import {API_DATA_STATUS} from "../settings/constants.js";

const useApi = (api, params) => {
  const [status, setStatus] = useState(API_DATA_STATUS.init);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    setStatus(API_DATA_STATUS.loading)

    try {
      const response = await api(params);
      console.log(response)
      setData(response)
      setStatus(API_DATA_STATUS.success)
    } catch (e) {
      setStatus(API_DATA_STATUS.error)
    }
  }, [api, params])

  useEffect(() => {
    getData()
  }, [getData, params]);

  return [status, data]
}

export default useApi;
