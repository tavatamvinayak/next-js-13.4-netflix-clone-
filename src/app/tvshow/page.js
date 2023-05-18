import React from 'react';
import Row from '@/components/Row';
import requests from '../../../utils/request';




async function TVSHOWS() {
  const res = await fetch(requests.fetchTvShows);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function TvShowsRated() {
  const res = await fetch(requests.fetchTvShowsRated);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
async function TvShow() {
  const NetFlix_TVSHOWS = await TVSHOWS();
  const TVSHOWSWATCH = NetFlix_TVSHOWS.results

  const NetFlix_TvShowsRated = await TvShowsRated();
  const TvShowsRatedWATCH = NetFlix_TvShowsRated.results
  return (
    <div>
       <Row title={`Top Rated`} movies={TVSHOWSWATCH} />
       <Row title={`Trending Movies`} movies={TvShowsRatedWATCH} />

    </div>
  );
}

export default TvShow
