import React from 'react'
import requests from '../../utils/request';
import Hero from '@/components/Hero';
import Row from '@/components/Row';
import Footer from '@/components/Footer';


// // data fetch a start 

async function moviePosters() {
  const res = await fetch(requests.fetchMoviePoster);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function trendingNow() {
  const res = await fetch(requests.fetchTrending);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function topRated() {
  const res = await fetch(requests.fetchTopRated);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function actionMovies() {
  const res = await fetch(requests.fetchActionMovies);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function comedyMovies() {
  const res = await fetch(requests.fetchComedyMovies);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function horrorMovies() {
  const res = await fetch(requests.fetchHorrorMovies);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function romanceMovies() {
  const res = await fetch(requests.fetchRomanceMovies);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function documentaries() {
  const res = await fetch(requests.fetchDocumentaries);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// // data fetch a end









async function Home() {

  const NetFlix_MoviePosters = await moviePosters();
  const moviePostersWATCH = NetFlix_MoviePosters.results
  // console.log(moviePostersWATCH)

  const NetFlix_TrendingNow = await trendingNow();
  const trendingNowWATCH = NetFlix_TrendingNow.results

  const NetFlix_TopRated = await topRated();
  const topRatedWATCH = NetFlix_TopRated.results

  const NetFlix_ActionMovies = await actionMovies();
  const actionMoviesWATCH = NetFlix_ActionMovies.results

  const NetFlix_ComedyMovies = await comedyMovies();
  const comedyMoviesWATCH = NetFlix_ComedyMovies.results

  const NetFlix_HorrorMovies = await horrorMovies();
  const horrorMoviesWATCH = NetFlix_HorrorMovies.results

  const NetFlix_RomanceMovies = await romanceMovies();
  const romanceMoviesWATCH = NetFlix_RomanceMovies.results

  const NetFlix_Documentaries = await documentaries();
  const documentariesWATCH = NetFlix_Documentaries.results
  return (
    <div className='font-sans overflow-y-hidden '>
      <p className='text-center'>HOME</p>
      <Hero />

    <Row title={`Movie Posters`} movies={moviePostersWATCH} />

       <Row title={`Trending Now`} movies={trendingNowWATCH} />
       <Row title={`Top Rated`} movies={topRatedWATCH} />
       <Row title={`Action Movies`} movies={actionMoviesWATCH} />
       <Row title={`Comedy Movies`} movies={comedyMoviesWATCH} />
       <Row title={`Horror Movies`} movies={horrorMoviesWATCH} />
       <Row title={`Romance Movies`} movies={romanceMoviesWATCH} />
       <Row title={`Documentaries`} movies={documentariesWATCH} /> 

     

    </div>
  )
}







export default Home
