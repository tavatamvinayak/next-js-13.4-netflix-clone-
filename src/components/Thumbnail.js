import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Thumbnail({ movie }) {
    return (
        <Link href={`/${movie.id}`}>
            <div className="inline-block px-3" >
                <div className="w-96 h-44 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
               
                <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="poster" className='object-cover' />
                </div>
            </div>
        </Link>
    )
}

export default Thumbnail
