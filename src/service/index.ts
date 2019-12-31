import axios from "axios";

import { Message, MessageBox } from "element-ui";
// 每次请求携带cookies信息
axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;
