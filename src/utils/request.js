import axios from 'axios';
// import qs from 'qs';
import { Message } from 'element-ui';
import store from '../store';

const service = axios.create({
  baseURL: 'http://localhost:3000',
  // withCredentials: true,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// service.interceptors.request.use(config => {
//   if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// });

service.interceptors.response.use(
  response => response.data,
  error => {
    const { response } = error;
    const { status, data, statusText } = response;
    const errorMsg = data.error_msg || statusText;

    if (status === 401) {
      store.dispatch('user/logout');
    } else {
      Message({
        message: `${status} ${errorMsg}`,
        type: 'error',
        duration: 2000
      });
    }

    return Promise.reject(error.response);
  }
);

export default service;
