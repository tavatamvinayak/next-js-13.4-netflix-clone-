'use client';

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
async function Action() {
  const res = await fetch(requests.fetchActionMovies);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Movies = async () => {
  const NetFlix_TopRated = await topRated();
  const topRatedWATCH = NetFlix_TopRated.results

  const NetFlix_Action = await Action();
  const ActionMovies = NetFlix_Action.results
  return (
    <div>
      <Row title={`Top Rated`} movies={topRatedWATCH} />
      <Row title={`Action Movies`} movies={ActionMovies} />
    </div>
  );
}
export default Movies;
// export default dynamic(() => Promise.resolve(Movies), { ssr: false });
