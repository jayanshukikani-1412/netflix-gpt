import axios from "axios";
import {TMDB_API_TOKEN} from "./Constant";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${TMDB_API_TOKEN}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;