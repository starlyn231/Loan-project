import axios from 'axios';

const AxiosHandler = () => {

    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
        async config => {
            config.baseURL = process.env.REACT_APP_API_URL
            config.headers = {
               // 'Authorization': `bearer ${Token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
     
            return config;
        },
        error => {
            Promise.reject(error)
        });

    return axiosInstance;
}


export default AxiosHandler;