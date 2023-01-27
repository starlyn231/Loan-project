import axios from 'axios'
import { Fragment } from 'react'

import { useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'

const fetchColor = ({ pageParam = 1 }) => {

  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export const InfiniteQueriesPage = () => {
  const [pageNumber, setpageNumber] = useState(1)

  const { data, error, isError, isLoading, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ['colors'], fetchColor, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 5) {
          return pages.length + 1
        }
        else {
          return undefined
        }

      }
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
        {data?.pages?.map((group, i) => {

          return (

            <Fragment key={i}>
              {
                group.data.map(color => (
                  <h2 key={color.id}> {color.id}. {color.label}</h2>
                ))
              }

            </Fragment>)
        })}


      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>load more </button>

        {
          isFetching && <div>Loading...</div>
        }

      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching ...' : null}</div>
    </>
  )
}
