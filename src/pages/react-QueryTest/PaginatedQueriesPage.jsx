import axios from 'axios'

import { useState } from 'react'
import { useQuery } from 'react-query'

const fetchColor = (pageNumber) => {

  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedQueriesPage = () => {
  const [pageNumber, setpageNumber] = useState(1)

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ['color', pageNumber], () => fetchColor(pageNumber), {
    keepPreviousData: true
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }


  return (
    < >
      <div>
        {data?.data?.map((color => {

          return (

            <div key={color.id}>
              <h2 >{color.id}. {color.label}</h2>

            </div>)
        }))}

        <div>
          <button onClick={() => setpageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev Page </button>
          <button onClick={() => setpageNumber(page => page + 1)} disabled={pageNumber === 5}>Next Page </button>
          {
            isFetching && <div>Loading...</div>
          }

        </div>
      </div>

    </>
  )
}
