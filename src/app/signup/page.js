"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import dynamic from 'next/dynamic';
function SignUp() {



    // // inpute text access
    const [InputText, setInputText] = useState("");

    const BG = "https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/be5b2939-da9f-4b9f-b76b-31b32ad0515b/IN-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"

    ///// input field access
    const inputField = (e) => {
        setInputText({ ...InputText,[e.target.name]: e.target.value })
    }

    /// // signUp a create user
    const Signup = (e) => {
        e.preventDefault()
        console.log(InputText)
    }


    return (
        <div style={{
            backgroundImage: `url(${BG})`,

        }}>
            <section >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[78vh] lg:py-0">
                    <h1 className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
                        Netflix Sign up
                    </h1>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                                Sign up to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/" onSubmit={Signup}>
                                <div>
                                    <label htmlFor="FName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                    <input type="text" onChange={inputField} name="FName" id="FName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" onChange={inputField} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"   />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" onChange={inputField} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                </div>
                                
                                <motion.button whileHover={{scale:1.1}} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</motion.button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link href={`/login`} className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"  >Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// export default SignUp;
export default dynamic( ()=> Promise.resolve(SignUp) , {ssr:false})