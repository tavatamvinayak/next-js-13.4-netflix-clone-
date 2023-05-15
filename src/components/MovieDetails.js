"use client"



import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';

import ReactPlayer from 'react-player'
// /// file require
import ImgBaseUrl from "../../utils/constant"
import requests from '../../utils/request';

// // react icons
import { BsPlayBtn } from 'react-icons/bs';
import { IoIosInformationCircle } from 'react-icons/io';



const MovieDetails = ({trailerObj ,trailerURL }) => {
  const [YoutubeOpenClose, setYoutubeOpenClose] = useState("hidden")

  const youtubeOpen = () => {
    setYoutubeOpenClose("block")
   
  } 
  // // buttons 
  
  const youtubeClose = () => {
    setYoutubeOpenClose("hidden")
   
  }

  return (
    <div>
      <div className="container  overflow-hidden  ">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh] justify-center lg:pb-12 ">
          <div className="absolute top-0 left-0 -z-10 h-screen w-[100vw]">
            <Image fill src={`${ImgBaseUrl}${trailerObj.backdrop_path || trailerObj.poster_path}`} alt={trailerObj.id} className='object-cover' />
          </div>
          <div className='px-5  '>
            <h1 className=' text-2xl font-bold md:text-4xl lg:text-7xl'>
              {trailerObj.title || trailerObj.original_title || trailerObj.name}
            </h1>
            <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
              {trailerObj.overview}
            </p>

            <div className='flex space-x-3'>
              <button onClick={youtubeOpen} className=' bg-gray-400 m-2 flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl'  >
                <BsPlayBtn className='text-4xl text-orange-600' />
                play
              </button>
              <button className=' bg-gray-400 m-2 flex items-center gap-x-2 rounded   px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl'>
                <IoIosInformationCircle className="text-4xl text-orange-600" />
                more info
              </button>
            </div>
          </div>
          <div onClick={youtubeClose} className={`z-50 absolute top-0 w-[100%]  h-[100%] flex justify-center items-center bg-[#000000b3] ${YoutubeOpenClose}`} >
            {/* // Render a YouTube video player */}
            {/* <ReactPlayer url={trailerURL} />  */}
            <div className=''>
              {/* // Only loads the YouTube player/ */}

              <ReactPlayer url={trailerURL}  />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
