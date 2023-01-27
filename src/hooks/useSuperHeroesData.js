import { useMutation, useQuery } from 'react-query'
import axios from 'axios';
import { fetchSuperheroes } from '../pages/react-QueryTest/services';

/*
const fetchSuperhero = async () => {
  const { data } = await axios.get('http://localhost:4000/superheroes')
  return data
}*/


export const useSuperHeroesData = (onSuccess, onError, isdataFetching) => {
  return useQuery('super-heroes', fetchSuperheroes,
    {
      onSuccess,
      onError,
      //enabled: isdataFetching === true
      // staleTime: 30000,
      //enabled: isdataFetching != true ? false : true

    })
}

