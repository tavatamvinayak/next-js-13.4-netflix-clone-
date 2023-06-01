"use client"

import React, { useState } from 'react'

import Link from 'next/link'
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiOutlineAlignRight } from 'react-icons/ai';
import { useRouter } from "next/navigation";

// animation
import { motion } from "framer-motion"

// //cookies
import Cookies from 'js-cookie';

function Navbar() {

    const router = useRouter();

    const [InputOpen, setInputOpen] = useState("hidden");

    const Open = () => {
        setInputOpen(" ")
    }
    const Close = () => {
        setInputOpen(" hidden")
    }

    // // search
    const [inputText, setInputText] = useState('');
    const inputSearch = (e) => {
        setInputText(e.target.value);
        // console.log(inputText)
    }
    const Searching = (e) => {
        e.preventDefault();

        router.push(`/search/${inputText}`)
        console.log(inputText)
    }
    // // 
    /// // mobile size 
    const [mobileNavbar, setMobileNavbar] = useState("hidden");
    const ShowNavMobile = () => {
        setMobileNavbar(" ")

    }
    const mobileNavbarClose = () => {
        setMobileNavbar("hidden")
    }


    // // cookies already have a JSON TOKEN
    const Token = Cookies.get("token");
    // console.log(Token);
    



return (
    // 'bg-orange-600 sm:bg-yellow-400 md:bg-yellow-700 lg:bg-pink-600 xl:bg-lime-400'
    <div className=" ">
        <header className="text-gray-600 body-font bg-[#8080809e]">
            <div className="container mx-auto flex justify-between p-5  items-center">
                <Link href={'/'} className="w-[20%] mr-4">
                    <img src="./netflixLogo.png" alt="netflixLogo" />
                </Link>
                <nav className="hidden sm:inline-block">
                    <Link href={'/'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Home</Link>
                    <Link href={'/tvshow'} className="mr-5 text-white hover:text-red-600  hover:font-bold">TV Shows</Link>
                    <Link href={'/movies'} className="mr-5 text-white hover:text-red-600  hover:font-bold">Movies</Link>
                    <Link href={'/new&popular'} className="mr-5 text-white hover:text-red-600 hover:font-bold ">New & Popular</Link>
                </nav>
                <div className='text-white flex text-2xl items-center'>
                    <div className='cursor-pointer flex text-yellow-800  hover:text-red-600 '>
                        <form onSubmit={Searching} >
                            <input type="text" className={`w-[100%]  rounded-md ${InputOpen} `} onChange={inputSearch} />
                        </form>
                        <AiFillCloseCircle className={`${InputOpen}`} onClick={Close} />
                        <BsSearch className='ml-1 text-white' onClick={Open} />
                    </div>
                   
                    {
                        // // if user already login 
                       (Token) ? <Link href={`/`} className='ml-5 cursor-pointer text-green-500 hover:text-red-600'><BsFillPersonFill className='text-green-500' /></Link> : <Link href={`/login`} className='ml-5 cursor-pointer  hover:text-red-600'><BsFillPersonFill /></Link>
                    }

                    

                    <div className='sm:hidden' onClick={ShowNavMobile}>
                        <AiOutlineAlignRight />
                    </div>

                </div>

            </div>
        </header>

        <div className={` z-10 flex justify-end ${mobileNavbar} `}>
            <div className='w-[40vw] flex flex-col bg-black px-2 pb-2'>
                <div className='flex flex-row justify-end pr-2 ' onClick={mobileNavbarClose}> <AiFillCloseCircle className='text-red-400 text-2xl' /> </div>
                <motion.div whileHover={{ scale: 1.2 }}><Link href={'/'} className="mt-1 text-white hover:text-red-600  hover:font-bold">Home</Link></motion.div>
                <motion.div whileHover={{ scale: 1.2 }}><Link href={'/tvshow'} className="mt-1 text-white hover:text-red-600  hover:font-bold">TV Shows</Link></motion.div>
                <motion.div whileHover={{ scale: 1.2 }}><Link href={'/movies'} className="mt-1 text-white hover:text-red-600  hover:font-bold">Movies</Link></motion.div>
                <motion.div whileHover={{ scale: 1.2 }}><Link href={'/new&popular'} className="mt-1 text-white hover:text-red-600 hover:font-bold ">New & Popular</Link></motion.div>

            </div>

        </div>
    </div>
)
}

export default Navbar
