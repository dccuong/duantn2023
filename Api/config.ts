import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json" +
      "multipart/form-data; boundary=AaB03x" +
      "--AaB03x" +
      "Content-Disposition: file" +
      "Content-Type: png" +
      "Content-Transfer-Encoding: binary" +
      "...data... " +
      "--AaB03x--",
  },
});


// Add a request interceptor
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
