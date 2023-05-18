import React from 'react';
import Row from '@/components/Row';
import requests from '../../../utils/request';

async function topRated() {
  const res = await fetch(requests.fetchTopRated);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function trendingMovies() {
  const res = await fetch(requests.fetchTopRated);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const NewPopular =async () => {
  const NetFlix_TopRated = await topRated();
  const topRatedWATCH = NetFlix_TopRated.results

  const NetFlix_trendingMovies = await trendingMovies();
  const TrendingMovies = NetFlix_trendingMovies.results
  return (
    <div>
       <Row title={`Top Rated`} movies={topRatedWATCH} />
       <Row title={`Trending Movies`} movies={TrendingMovies} />

    </div>
  );
}

export default NewPopular;
