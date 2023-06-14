import { Button } from '@mui/material'
import { useState } from 'react';
import { useSuperHeroesData } from '../../hooks/UseQueryHook';

export const HomeWork = () => {
  const [isdataFetching, setisdataFetching] = useState(false)
  const onSuccess = (data) => {
    console.log('data is fetching')
  }

  const onError = (error) => {
    console.log('data is fetching with error')
  }
  const { data, error, isError, isLoading, isFetching, refetch } = useSuperHeroesData(onSuccess, onError, isdataFetching);


  return (
    <div>
      <Button onClick={refetch}>Click</Button>


    </div>
  )
}
