import React from 'react'
import Thumbnail from './Thumbnail'

function Row({title , movies}) {
  return (
    <div>

      <div className="flex flex-col bg-white m-auto p-auto">
        <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
          {title}
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">

         {
            movies.map((movie)=> <Thumbnail key={movie.id} movie={movie} /> )
         }
            
         


          </div>
        </div>
      </div>

    </div>
  )
}

export default Row
