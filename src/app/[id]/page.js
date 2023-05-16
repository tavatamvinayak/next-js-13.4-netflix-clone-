

import MovieDetails from '@/components/MovieDetails'
import MoreByID from '@/components/MoreByID'
import dynamic from 'next/dynamic';
import React from 'react'

async function movieIdPage({params}) {
    const id = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-us&append_to_response=videos`)
    .then((e)=>e.json())

    // console.log(res.backdrop_path)
  const trailerObj = res;
  // console.log(trailerObj)
    const trailerIndex = trailerObj.videos.results.findIndex((e) => e.type === "Trailer") 
  // console.log(trailerIndex)
  const trailerURL = `https://www.youtube.com/watch?v=${trailerObj.videos.results[trailerIndex].key || "Omg5ihAMTtI"}`;
  // console.log(trailerURL);

  return (
    <div>
      {/* MovieDetailsID {id} */}
      <MovieDetails trailerObj={trailerObj} trailerURL={trailerURL}  />
      <MoreByID trailerObj={trailerObj} />
    </div>
  )
}

// export default movieIdPage;
export default dynamic(() => Promise.resolve(movieIdPage), { ssr: false });