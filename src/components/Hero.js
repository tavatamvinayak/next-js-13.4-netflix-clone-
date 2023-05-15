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
import MovieDetails from './MovieDetails';



async function getData() {
  const res = await fetch(requests.fetchMoviePoster);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


// // only trailer
async function Trailer() {

  const data = await getData();
  const random = Math.floor(Math.random() * data.results.length)

  const movie = await data.results[random]
  // console.log(movie)
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`);
  // console.log(random)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const TrailerConstant = async()=>{
  
  return trailerObj
}


// ///                                               /// main page
const Hero = async () => {




  
const trailerObj = await Trailer()

  // console.log(trailerObj)
  // console.log(trailerObj.videos.results)
  const trailerIndex = trailerObj.videos.results.findIndex((e) => e.type === "Trailer")
  // console.log(trailerIndex)

  const trailerURL = `https://www.youtube.com/watch?v=${trailerObj.videos.results[trailerIndex].key}`;
  console.log(trailerURL);



  return (
    <div>
       <MovieDetails trailerObj={trailerObj} trailerURL={trailerURL}  />
    </div>
  );
}
// export default Hero;

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
