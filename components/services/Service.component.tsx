import React from 'react'
import { GiFlexibleStar } from 'react-icons/gi';
import {AiOutlineSafetyCertificate, AiOutlineEuroCircle} from 'react-icons/ai';

export const Service = () => {
  return (
    <div className='pt-20 md:py-20 px-4 sm:px-10 md:px-32 bg-[#f7f7f7]'>
      <p className='text-md md:text-3xl lg:text-4xl pl-2 md:pl-10 text-[#fd8704] border-l-[10px] md:border-l-[15px] border-[#fd8704]'>
        Pourquoi choisir nos formules de déménagements ?
      </p>
      <div className='flex flex-col lg:flex-row  gap-10 pt-20'>
        <div className='flex-1 bg-white shadow-lg rounded-lg p-5 text-center mt-10'>
          <div className='flex items-center justify-center -mt-20 mb-10'>
            <div className='p-5 bg-white rounded-full'>
              <AiOutlineSafetyCertificate color='#fd8704' size='40' />
            </div>
          </div>
          <h1 className='text-[#fd8704] font-bold text-1xl'> Demenagment formule camion avec chauffeur </h1>
          <p className='text-xs md:text-base my-3 text-gray-500'>
          vous faites la mise en cartons, le demontage des meubles et la protection de fragile, le demenageur ne viendra qu'avec le camion et vous aidera à charger et décharger le camion.
          </p>
        </div>
        <div className='flex-1 bg-white shadow-lg rounded-lg p-5 text-center mt-10'>
          <div className='flex items-center justify-center -mt-20 mb-10'>
            <div className='p-5 bg-white rounded-full'>
              <AiOutlineEuroCircle color='#fd8704' size='40' />
            </div>
          </div>
          <h1 className='text-[#fd8704] font-bold text-1xl'> Demenagment formule économique </h1>
          <p className='text-xs md:text-base my-3 text-gray-500'>
          vous faites la mise en cartons, le demontage des meubles et la protection de fragile, le demenageur s'occupera de la manutention et le nombre de déménageur nécessaires pour affectuer le chargment et le déchargement.
          </p>
        </div>
        <div className='flex-1 bg-white shadow-lg rounded-lg p-5 text-center mt-10'>
          <div className='flex items-center justify-center -mt-20 mb-10'>
            <div className='p-5 bg-white rounded-full'>
              <GiFlexibleStar color='#fd8704' size='40' />
            </div>
          </div>
          <h1 className='text-[#fd8704] font-bold text-1xl'> Demenagment formule standard </h1>
          <p className='text-xs md:text-base my-3 text-gray-500'>
          vous faites la mise en carton des objets non fragiles, les demenageur s'occupe du demontage, remontage des meubles, la protection des objets fragiles, le nombre de déménageur nécessaires pour effectuer le chargement et le déchargment.
          </p>
        </div>
        <div className='flex-1 bg-white shadow-lg rounded-lg p-5 text-center mt-10'>
          <div className='flex items-center justify-center -mt-20 mb-10'>
            <div className='p-5 bg-white rounded-full'>
              <GiFlexibleStar color='#fd8704' size='40' />
            </div>
          </div>
          <h1 className='text-[#fd8704] font-bold text-1xl'> Demenagment formule lux clé en main </h1>
          <p className='text-xs md:text-base my-3 text-gray-500'>
          c'est la formule complet clé en main les déménageur s'occupe de tout, Un déménagement tout compris, Notre équipe s'occupe de tout de A à Z, Un déménagement en toute sérénité
          </p>
        </div>
      </div>
    </div>
  )
}
