import {apiClient} from "../utils/axios.js";

export const getUsers = () => {
  return apiClient.get("/users");
};

export const getUser = (seq) => {
  return apiClient.get(`/users/${seq}`);
};

export const createUser = (inputs) => {
  return apiClient.post("/users", inputs);
};

export const updateUser = (inputs) => {
  return apiClient.put("/users", inputs);
};

export const deleteUser = (seq) => {
  return apiClient.delete(`/users/${seq}`);
};
