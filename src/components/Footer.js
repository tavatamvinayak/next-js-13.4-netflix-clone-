import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='my-5'>
      <div className="flex justify-center">
        <Link href={'/'} className="w-[20%]">
          <img src="./netflixLogo.png" alt="netflixLogo" className='w-[40%]' />
        </Link>
        

      </div>
    </div>
  )
}

export default Footer
