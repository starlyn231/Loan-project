import axios from 'axios';
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
//import { fetchSuperhero } from '../pages/react-QueryTest/services'
export const fetchSuperhero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}



export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(['super-hero', heroId], fetchSuperhero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === heroId)

      if (hero) {
        return {
          data: hero
        };
      } else {
        return undefined;
      }

      // onSuccess,
      //onError,
      //enabled: isdataFetching === true
      // staleTime: 30000,
      //enabled: isdataFetching != true ? false : true

    },
  }
  );
}
