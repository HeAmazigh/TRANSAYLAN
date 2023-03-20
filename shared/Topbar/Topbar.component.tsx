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
          <Link href='tel:0778644567' className='text-xs bg-[#0080FE] text-white py-2 px-4 rounded-sm hover:bg-[#0080FE] transition-colors ease-linear'>0778 644 567</Link>
        </div>
      </nav>
    </header>
  )
}
