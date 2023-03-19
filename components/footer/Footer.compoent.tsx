import Link from 'next/link'
import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:py-5 px-4 sm:px-10 md:px-32 bg-[#ececec]'>
        <div className='flex items-center gap-3 text-gray-500'> <AiOutlineCopyrightCircle color='#aaaaaa' size='20'/> 2022 - Réalisé par <Link href="http://amazighettal.vercel.app">H.Amazigh</Link> </div>
    </div>
  )
}
