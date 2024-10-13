import {apiClient} from "../utils/axios.js";

export const getUsers = () => {
  return apiClient.get("/users/users");
}

export const getUser = (seq) => {
  return apiClient.get(`/users/${seq}`);
}
