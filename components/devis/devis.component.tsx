import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Devis = () => {
  return (
    <div className='flex flex-col lg:flex-row px-4 sm:px-10 md:px-32'>
      <div className='flex-1 pt-20 md:py-20'>
        <p className='text-md md:text-3xl lg:text-4xl pl-2 md:pl-10 text-[#fd8704] border-l-[10px] md:border-l-[15px] border-[#fd8704]'> 
          Vous souhaitez obtenir un devis pour votre déménagement ?
        </p>
        <p className='text-xs md:text-lg my-3 text-gray-500 pr-4'>
          Toute notre équipe de déménagement est toujours prête à répondre à vos besoins, à vous tenir informé du bon déroulement de votre déménagement 
          et à vous accompagner tout au long du chemin.
        </p>
        <div className='flex items-center pt-5'>
          <Link href='#devis' className='text-xs md:text-base bg-[#fd8704] text-white py-2 px-4 rounded-sm hover:bg-[#fda847] transition-colors ease-linear'>Nous contacter</Link>
        </div>
      </div>
      <div className='flex-1 pb-20'>
        <Image 
          className=""
          src={require('../../public/prix_dem.jpeg')}
          alt=""
        />
      </div>
    </div>
  )
}
