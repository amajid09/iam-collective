/*eslint-disable */
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userToken = sessionStorage.getItem('accessToken');

    if (userToken) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${userToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        window.location.href = '';
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
