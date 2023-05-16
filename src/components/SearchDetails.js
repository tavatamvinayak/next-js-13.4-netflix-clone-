"use client"
import Link from 'next/link'
import React from 'react'

function SearchDetails({e}) {
    const movie = e
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href={`/${movie.id}`} className="block relative h-48 rounded overflow-hidden">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt={movie.original_title} className="object-cover object-center w-full h-full block"  />
                </Link>
                <div className="mt-4">
                    <h3 className="text-white text-xs tracking-widest title-font mb-1">{movie.media_type}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{movie.original_title}</h2>
                    {
                        movie.overview ?  <p className="mt-1 text-white">{movie.overview.substring(0, 90) }</p> : "not a write"
                    }
                  
                </div>
            </div>
        </>
    )
}

export default SearchDetails
