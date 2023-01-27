import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../../hooks/useSuperHeroData'

export const RQsuperHero = () => {
  const { heroId } = useParams();
  const { data, error, isError, isLoading } = useSuperHeroData(heroId)


  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error!! {error.message}</div>
  }


  return (
    <div>
      {data?.data.name} - {data.data.alterEgo}

    </div>
  )
}
