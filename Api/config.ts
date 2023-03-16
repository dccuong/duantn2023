import axios from "axios";

const axiosClient = axios.create({

    baseURL: "http://localhost:8080/api/",
    headers: {
        "Content-Type": "application/json",
    },
})

export const axiosServer = axios.create({
    baseURL: "http://localhost:8080/api/",

    headers: {
        "Content-Type": "application/json",
    },
});

axiosServer.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Add a request interceptor


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
