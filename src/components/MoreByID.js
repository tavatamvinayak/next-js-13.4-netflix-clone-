import React from 'react'

function MoreDetails({ trailerObj }) {
    return (
        <div className='px-20'>
            <div className=''>
                <div className='mx-1 my-3'>
                    <h1 className='text-red-400 text-2xl'>release_date : <span className='text-white'>{trailerObj.release_date}</span></h1>
                    <h1 className='text-red-400 text-2xl'>runTime:<span className='text-white'> {trailerObj.runtime}</span></h1>
                </div>
                <div className='mx-1 my-3'>
                    <h1 className='text-red-400 text-2xl'>budget : <span className='text-white'>{trailerObj.budget}</span></h1>
                    <h1 className='text-red-400 text-2xl'>original_language : <span className='text-white'> {trailerObj.original_language}</span> </h1>
                </div>
                <div className='mx-1 my-3'>
                    <h1 className='text-red-400 text-2xl'>production_companies</h1>
                    {
                        trailerObj.production_companies.map((e) => <>
                            <div>
                                <img src={e.logo_path} alt={e.id} />
                                <p> {e.name} </p>
                            </div>
                        </>)
                    }
                </div>
                <div className='mx-1 my-3'>
                    <h1 className='text-red-400 text-2xl'>production_countries"</h1>
                    {
                        trailerObj.production_countries.map((e) => <>
                            <div>
                                <p> {e.name} </p>
                            </div>
                        </>)
                    }
                </div>
            </div>
            <div className=''>
                <div className='sm:mx-5 border border-2 border-yellow-400'>
                    <h1 className='text-red-400 text-2xl'>genres</h1>
                    {
                        trailerObj.genres.map((e) => <p> {e.name} </p>)
                    }
                </div>
                <div className='sm:mx-1 my-2 border border-2 border-yellow-400'>
                    <h1 className='text-red-400 text-2xl'>spoken_languages</h1>
                    {
                        trailerObj.spoken_languages.map((e) => <p>{e.name}</p>)
                    }
                    <h1>{trailerObj.tagline}</h1>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails
