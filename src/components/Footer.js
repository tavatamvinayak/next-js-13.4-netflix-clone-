import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className="flex">
        <Link href={'/'} className="w-[20%]">
          <img src="./netflixLogo.png" alt="netflixLogo" />
        </Link>

      </div>
    </div>
  )
}

export default Footer
