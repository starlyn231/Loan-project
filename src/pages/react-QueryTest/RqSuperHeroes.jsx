import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom';
import { useSuperHeroesData, useAddSuperHeroesData } from '../../hooks/useSuperHeroesData';
import { TextField } from "@mui/material";
import { addSuperHero } from './services';
export const RqSuperHeroes = () => {
  const [isdataFetching, setisdataFetching] = useState(true)
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const queryClient = useQueryClient()
  const onSuccess = (data) => {
    // console.log(' perfom sie effect after data fetching', data)

  }

  const onError = (error) => {
    console.log(' perfom sie effect afterfind error')

  }

  const { data, error, isError, isLoading, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError, isdataFetching);

  //const { mutate: addHero } = useAddSuperHeroesData()
  const mutation = useMutation(addSuperHero);

  const resetForm = () => {
    setAlterEgo("")
    setName("")

  }
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo })
    const hero = { name, alterEgo }
    mutation.mutate(hero, {
      /* onSuccess: (data) => {
 
         // refresh cache
         queryClient.invalidateQueries('super-heroes');
         resetForm();
         /*  queryClient.setQueryData('super-heroes', (oldQueryData) => {
                 return {
                   ...oldQueryData,
                   data: [...oldQueryData.data, data.data]
                 }
               })
       }*/
      OnMutate: async (newHero) => {
        await queryClient.cancelQueries('super-heroes');
        const previousHeroData = queryClient.getQueryData('super-heroes')
        queryClient.setQueryData('super-heroes', (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [...oldQueryData.data,
            { id: oldQueryData?.data.length + 1, ...newHero }
            ]
          }
        })

        return {
          previousHeroData,
        }

      },
      onError: (_error, _hero, context) => {
        queryClient.setQueryData('super-heroes', context.previousHeroData)
        console.log(_error)
      },
      onSettled: () => { queryClient.invalidateQueries('super-heroes'); }

    })
  }
  

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }



  return (
    < >

      { /*  <Button onClick={refetch}>Fetch Heroes</Button> */}
      <div style={{ display: 'flex' }}>
        <TextField
          sx={{ margin: 2 }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          defaultValue="Small"
          variant="filled"
          size="small"
        />

        <TextField
          sx={{ margin: 2 }}
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <button onClick={handleAddHeroClick}  >Add Hero</button>
        <Button onClick={refetch}>Click</Button>

      </div>

      {data.map((hero => {

        return (

          <div key={hero.id}>
            <Link to={`/hero/${hero.id}`}>{hero.name}</Link>

          </div>)
      }))}


    </>
  )
}
