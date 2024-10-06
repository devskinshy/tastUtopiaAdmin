import {apiClient} from "../utils/axios.js";

export const getUsers = () => {
  return apiClient.get("/user/users");
}

export const getUser = (seq) => {
  return apiClient.get(`/user/${seq}`);
}
