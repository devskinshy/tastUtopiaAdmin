import { apiClient } from "../utils/axios.js";

/**
 * 가게 전체 조회
 */
export const getStores = () => {
  return apiClient.get("/stores");
};

/**
 * 가게 추가 API
 * @param {object} params - 가게 정보
 */
export const addStore = (params) => {
  return apiClient.post("/stores", params);
};

/**
 * 가게 수정 API
 * @param {string} storeId - 가게 ID
 * @param {object} params - 가게 정보
 */
export const editStore = (storeId, params) => {
  return apiClient.put(`/stores/${storeId}`, params);
};

/**
 * 가게 삭제 API
 * @param {string} storeId - 가게 ID
 */
export const deleteStore = (storeId) => {
  return apiClient.delete(`/stores/${storeId}`);
};
