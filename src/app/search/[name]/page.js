
"use client"

import React, { useState } from 'react'
import SearchDetails from '@/components/SearchDetails';
import dynamic from 'next/dynamic';

async function MovieNameDetails({ params }) {
  const name = params.name
  const [FetchFail, setFetchFail] = useState("");
  /// adult 18+ or not
  const [AdultYesNo, setAdultYesNo] = useState("false");

  // fetch next hidden or not
  const [OpenSeries, setOpenSeries] = useState("hidden");
  const [OpenPeople, setOpenPeople] = useState("hidden");

  // // 18+ or not || then hide
  const [YesNoHide, setYesNoHide] = useState(" ");

  const movies = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${name}&page=1&include_adult=${AdultYesNo}`)
    .then((e) => e.json()).catch((e) => setFetchFail(<>
      <h1 className='text-5xl text-red-500'>this content only adult 18+ sorry</h1>
    </>))
  const series = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${name}&page=1&include_adult=${AdultYesNo}`)
    .then((e) => e.json()).catch((e) => setFetchFail(<>
      <h1 className='text-5xl text-red-500'>this content only adult 18+ sorry</h1>
    </>))
  const peopleSearch = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${name}&page=1&include_adult=${AdultYesNo}`)
    .then((e) => e.json()).catch((e) => setFetchFail(<>
      <h1 className='text-5xl text-red-500'>this content only adult 18+ sorry</h1>
    </>))

// // shows for new next
  const seriesBtn = () => {
    setOpenSeries(" ")
  }
  const personalBtn = () => {
    setOpenPeople(" ")
  }

  // // adult checks changes
  const Yes18 =()=>{
    setAdultYesNo("true")
    setYesNoHide("hidden")
  }
  const No18=()=>{
    setAdultYesNo("false")
    setYesNoHide("hidden")
  }


  return (
    <div className='my-5'>
      <div className={`text-center ${YesNoHide}`}>  <h1>Are you Adult 18+ </h1>
        <button className='text-white border border-1 border-red-400 mr-4 px-2 py-1 ' onClick={Yes18} >Yes</button>
        <button className='text-white border border-1 border-red-400 mr-4 px-2 py-1' onClick={No18} >No</button>
      </div>
      <h1 className='text-center '>Movie & Series Search  <span className='text-2xl text-red-500'>{name}</span></h1>
      <section>
        {/* movies */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {
                movies.results.map((e, key) => <SearchDetails key={key} e={e} />)
              }
              {FetchFail}
            </div>
          </div>
        </section>

        {/* series */}
        <div className='text-center'>
          <button onClick={seriesBtn} className='text-2xl text-white rounded-lg border border-gray-300 border-2  '>Series search</button>
        </div>
        <h1 className='text-center '>Movie & Series Search  <span className='text-2xl text-red-500'>{name}</span></h1>
        <section className={`text-gray-600 body-font ${OpenSeries}`}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {
                series.results.map((e, key) => <SearchDetails key={key} e={e} />)
              }
              {FetchFail}
            </div>
          </div>
        </section>
        {/* personal */}
        <div className='text-center'>
          <button onClick={personalBtn} className='text-2xl text-white rounded-lg border border-gray-300 border-2  '>People search</button>
        </div>
        <h1 className='text-center '>Movie & Series Search  <span className='text-2xl text-red-500'>{name}</span></h1>
        <section className={`text-gray-600 body-font ${OpenPeople}`}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {
                peopleSearch.results.map((e, key) => <SearchDetails key={key} e={e} />)
              }
              {FetchFail}
            </div>
          </div>
        </section>


      </section>
    </div>
  )
}

// export default movieNameDetails;
export default dynamic(() => Promise.resolve(MovieNameDetails), { ssr: false });