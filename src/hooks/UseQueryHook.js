import { useMutation, useQuery } from 'react-query'
import { getCustomers } from '../callApi/Customer'

export const QueryGetCustomer= (onSuccess, onError, isdataFetching) => {
  return useQuery('listCustomers', getCustomers(),
    {
      onSuccess,
      onError,
      //enabled: isdataFetching === true
      // staleTime: 30000,
      //enabled: isdataFetching != true ? false : true

    })
}

