import {apiClient} from "../utils/axios.js";

export const getUsers = () => {
  return apiClient.get("/users");
}

export const getUserBySeq = (seq) => {
  return apiClient.get(`/users/${seq}`);
}
