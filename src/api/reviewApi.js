import {apiClient} from "../utils/axios.js";

export const getReviews = () => {
  return apiClient.get("/reviews");
}

export const getReviewByUserId = (userId) => {
  return apiClient.get(`/reviews/users/${userId}`);
}

export const getReviewByStoreId = (storeId) => {
  return apiClient.get(`/reviews/stores/${storeId}`);
}

export const getReview = ({storeId, userId}) => {
  return apiClient.get(`/reviews/${storeId}/${userId}`);
}
