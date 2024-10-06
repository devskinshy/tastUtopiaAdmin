import {apiClient} from "../utils/axios.js";

export const getStores = () => {
  return apiClient.get("/store");
}

export const getStore = (seq) => {
  return apiClient.get(`/store/${seq}`);
}
