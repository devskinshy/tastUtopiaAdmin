// api.js
import axios from "axios";

const API_BASE_URL = "http://3.35.212.57:8080";
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 요청이 보내지기 전에 수행할 작업
    // 예시 : 토큰이 필요하면 헤더에 추가
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 응답 에러가 발생했을 때 처리 (예: 401 Unauthorized 처리)
    // 인증 에러 처리 (예: 로그인 페이지로 리다이렉트)
    // if (error.response.status === 401) {
    //   window.location.href = '/login';
    // }
    return Promise.reject(error);
  }
);

const get = async (url, params = {}) => {
  return apiClient.get(url, { params }).then((response) => response.data);
};

const post = async (url, data) => {
  return apiClient.post(url, data).then((response) => response.data);
};

const put = async (url, data) => {
  return apiClient.put(url, data).then((response) => response.data);
};

const del = async (url) => {
  return apiClient.delete(url).then((response) => response.data);
};

const apiService = {
  get,
  post,
  put,
  delete: del,
};

export default apiService;
