import AxiosHandler from "../requestManager/AxiosHandler";

export const getPayments= () => {

    return AxiosHandler().get('/payments').then(({ data }) => data);
}

export const createPayments= ({id, request}) => {
    return AxiosHandler().post(`/loan/${id}/pay`,request).then(({ data }) => data);
}

/*
export const getLoanById= (id) => {

    return AxiosHandler().get(`/loan/${id}`).then(({ data }) => data);
}

/*
export const getCustomerById = (id) => {

    return AxiosHandler().get(`/customer/${id}`).then(({ data }) => data);
}
export const createCustomers = (request) => {

    return AxiosHandler().post('/add-newCustomer', request).then(({ data }) => data);
}
export const UpdateCustomer = ({id, request}) => {

    return AxiosHandler().put(`/edit-customer/${id}` ,request ).then(({ data }) => data);
}
export const deleteCustomer = (id) => {

    return AxiosHandler().delete(`/delete-customer/${id}`).then(({ data }) => data);
}

*/




