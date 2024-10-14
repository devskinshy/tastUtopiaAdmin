import axios from "axios";
import {API_BASE_URL, API_RESPONSE_CODE} from "../settings/constants.js";

export const apiClient = axios.create({
  baseURL: API_BASE_URL
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    const {data : responseData} = response;

    if (responseData.code !== API_RESPONSE_CODE.success) {
      return Promise.reject(response.data);
    }

    return responseData.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

