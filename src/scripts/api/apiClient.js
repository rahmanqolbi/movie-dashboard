import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = "224910c5571faecc875c202463624515";

const axiosClient = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default axiosClient;
