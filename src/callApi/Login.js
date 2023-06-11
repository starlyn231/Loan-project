import AxiosHandler from "../requestManager/AxiosHandler";

export const loginService = (request) => {

    return AxiosHandler().post('/login', request).then(({ data }) => data);
}