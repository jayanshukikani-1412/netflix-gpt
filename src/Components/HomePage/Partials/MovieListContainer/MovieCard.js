import React from 'react'
import { TMDB_IMG_CDN } from '../../../../Utils/Constant'

const MovieCard = ({movie}) => {
  return (
    <div>
      <img className='w-[300px] aspect-video' src={TMDB_IMG_CDN+movie?.poster_path} alt="" />
    </div>
  )
}

export default MovieCard
