import {apiClient} from "../utils/axios.js";

export const getStores = () => {
  return apiClient.get("/stores");
}

export const getStoreByStoreId = (storeId) => {
  return apiClient.get(`/stores/${storeId}`);
}
