"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'



// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


function Thumbnail({ movie }) {

    // // aos
  useEffect(()=>{
    AOS.init();
},[])

    return (
        <Link href={`/${movie.id}`}  >
            <motion.div className="inline-block px-3 " whileHover={{ scale: 1.2 }} >
                <div className="w-96 h-44 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-red-500  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="poster" className='object-cover' />
                
                </div>
            </motion.div>
        </Link>
    )
}

// export default Thumbnail
export default dynamic(() => Promise.resolve(Thumbnail), { ssr: false });