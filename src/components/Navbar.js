"use client"

import React, { useState } from 'react'

import Link from 'next/link'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineAlignRight } from 'react-icons/ai';

function Navbar() {

    const [InputOpen, setInputOpen] = useState("hidden");

    const Open = () => {
        setInputOpen(" ")
    }
    const Close = () => {
        setInputOpen(" hidden")
    }


    return (
        // 'bg-orange-600 sm:bg-yellow-400 md:bg-yellow-700 lg:bg-pink-600 xl:bg-lime-400'
        <div className=" bg-[#8080809e]">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex justify-between md:flex-wrap p-5  md:flex-row md:justify-between items-center">
                    <Link href={'/'} className="w-[20%]">
                        <img src="./netflixLogo.png" alt="netflixLogo" />
                    </Link>
                    <nav className="hidden  md:block">
                        <Link href={'/'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Home</Link>
                        <Link href={'/tvshow'} className="mr-5 text-white hover:text-red-600  hover:font-bold">TV Shows</Link>
                        <Link href={'/movies'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Movies</Link>
                        <Link href={'/new&popular'} className="mr-5 text-white hover:text-red-600 hover:font-bold ">New & Popular</Link>
                        <Link href={'/mylist'} className="mr-5 text-white hover:text-red-600  hover:font-bold">My List</Link>
                    </nav>
                    <div className='text-white flex text-2xl'>
                        <div className='cursor-pointer flex  hover:text-red-600 '> <input type="text" className={`w-[100%] rounded-md ${InputOpen} `} />
                            <AiFillCloseCircle className={`${InputOpen}`} onClick={Close} />  <BsSearch className='ml-3' onClick={Open} />
                        </div>
                        <Link href={'/'} className='ml-5 cursor-pointer  hover:text-red-600'><BsFillPersonFill /></Link>

                        <div className='sm:hidden'>
                            <AiOutlineAlignRight />
                        </div>

                    </div>

                </div>
            </header>

            {/* <div className='bg-gray-400 z-50 flex justify-end'>
                <div className='pr-8'>
            
                        <Link href={'/'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Home</Link>
                        <Link href={'/tvshow'} className="mr-5 text-white hover:text-red-600  hover:font-bold">TV Shows</Link>
                        <Link href={'/movies'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Movies</Link>
                        <Link href={'/new&popular'} className="mr-5 text-white hover:text-red-600 hover:font-bold ">New & Popular</Link>
                        <Link href={'/mylist'} className="mr-5 text-white hover:text-red-600  hover:font-bold">My List</Link>
                     
                </div>
                
            </div> */}
        </div>
    )
}

export default Navbar
