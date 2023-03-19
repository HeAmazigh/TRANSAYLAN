import Image from 'next/image'
import React from 'react'
import {aboutrData} from '../../db/data'

export const About = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center pt-20 md:pt-20 px-4 sm:px-10 md:px-24'>
      <div className='flex-1 pb-20'>
        <div className='text-left px-5 md:px-10'>
          <div>
            <p className='text-md md:text-3xl lg:text-4xl pl-2 md:pl-10 text-[#fd8704] border-l-[10px] md:border-l-[15px] border-[#fd8704]'>{aboutrData.title} </p>
            <p className='text-xs md:text-lg my-3 text-gray-500'>
            Vous cherchez une société de déménagement proposant plusieurs formules correspondant réellement a vos attentes ?
            </p>
            <p className='text-xs md:text-lg my-3 text-gray-500'>
            Notre entreprise de déménagement est là pour répondre à vos besoins ! Depuis plus de 4 ans, nous sommes spécialisés dans le déménagement des particuliers et des professionnels, nous faisons de la satisfaction client notre priorité.
            </p>
            <p  className='text-xs md:text-lg my-3 text-gray-500'>
            Besoin de renseignements sur nos prestations ou de conseils pour l'organisation de votre déménagement? Contactez-nous
            </p>
          </div>
        </div>
      </div>
      <div className=''>
      <Image 
        className="w-96"
        src={require('../../public/about.png')}
        alt=""
      />
      </div>
    </div>
  )
}
