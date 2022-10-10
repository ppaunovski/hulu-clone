import React from 'react'
import Tumbnail from './Tumbnail'

function MovieSection({results}) {
    console.log(results)
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {results.map((res) => {
            return(
                <Tumbnail key={res.id} result={res}  />
            )
        })}
    </div>
  )
}

export default MovieSection