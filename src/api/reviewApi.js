import {apiClient} from "../utils/axios.js";

export const getReviews = () => {
  return apiClient.get("/review/all");
}

export const getReviewByUserId = (userId) => {
  return apiClient.get(`/review/all/${userId}`);
}

export const getReviewByStoreId = (storeId) => {
  return apiClient.get(`/review/all/${storeId}`);
}

export const getReview = ({storeId, userId}) => {
  return apiClient.get(`/review/${storeId}/${userId}`);
}
