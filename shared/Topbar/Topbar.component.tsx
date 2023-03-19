import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Topbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-end h-full bg-white px-2 sm:px-14 md:px-24'>
        <div className=''>
        <Image
          className="w-32 sm:w-40 md-52"
          src={require('../../public/logo.png')}
          objectFit='contain'
          objectPosition='left'
          alt=""
        />
        </div>
        <div className='flex-1 flex items-center justify-end gap-4'>
          <span>Contact<span className='hidden md:inline'>ez-nous</span> </span>
          <Link href='tel:0553872956' className='text-xs bg-[#fd8704] text-white py-2 px-4 rounded-sm hover:bg-[#fda847] transition-colors ease-linear'>045 455 567 456</Link>
        </div>
      </nav>
    </header>
  )
}
