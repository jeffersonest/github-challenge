import axios from "axios";

const api = axios.create({
  baseURL: " https://api.github.com"
});

let errorResponse = {};

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (404 === error.response.status) {
      errorResponse.status = 404;
     return Promise.reject(errorResponse);
  } else {
      return Promise.reject(error);
  }
});

export default api;