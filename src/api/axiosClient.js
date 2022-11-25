import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://mic.t-solution.vn/api/v2",
  headers: {
    "content-type": "application/json",
  },
  //   paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
