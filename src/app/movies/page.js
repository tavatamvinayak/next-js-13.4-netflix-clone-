'use client';

import React from 'react';
import requests from '../../../utils/request';

import dynamic from 'next/dynamic'

// async function getData() {
//   // const res = await fetch(requests.fetchActionMovies);

//   // if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//   // throw new Error('Failed to fetch data');
//   // }
//   //  
//   // return res.json();
// }

const Movies = async () => {

  return (
    <div>
      
    </div>
  );
}

export default dynamic(() => Promise.resolve(Movies), { ssr: false });
