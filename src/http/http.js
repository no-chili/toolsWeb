import axios from "axios";
const http = axios.create({
  baseURL: "api",
  timeout: 3000,
});
// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { http };
