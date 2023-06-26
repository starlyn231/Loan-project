import axios from 'axios';
export const setTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };
const AxiosHandler = () => {
// Establecer el token en el localStorage

  
  // Obtener el token del localStorage
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
        async config => {
            const token = getTokenFromLocalStorage();
    
            config.baseURL = process.env.REACT_APP_API_URL
            config.headers = {
             'Authorization': `x-token ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            if (token) {
               // Object.assign(config.headers, { 'Authorization': `Bearer ${token}` });
                // O utilizando el operador spread:
                config.headers['x-token'] = token;
              }
           // console.log(token);
            //console.log(' configurations: ' ,config);
            config.timeout = 60000;
            return config;
        },
        error => {
            Promise.reject(error)
        });
 axiosInstance.interceptors.response.use(async (response) => {
        const token = getTokenFromLocalStorage();
    
        if (token) {
          response.headers['x-token'] = token;
        }
    

        //return response
        return response
    }, async function (error) {
        return Promise.reject(error);
    });  
    return axiosInstance;
}


export default AxiosHandler;