import AxiosHandler from "../requestManager/AxiosHandler";

export const loginService = (request) => {

    return AxiosHandler().post('/login', request).then(({ data }) => data);
}

export const getUser= () => {
    return AxiosHandler().get('/user').then(({data}) => data);
}