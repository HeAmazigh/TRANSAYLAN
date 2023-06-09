import React from 'react'
import {AiOutlineMail, AiOutlinePhone, AiOutlineClockCircle} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

export const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row py-10 md:py-20 px-4 sm:px-10 md:px-32 bg-[#f7f7f7]'>
      <div className='flex-1 mb-5'>
        <p className='flex justify-center items-center text-sm md:text-lg lg:text-1xl text-[#0080FE]'>CONTACT</p>
        <span className='flex justify-center gap-3 text-center'> <AiOutlineMail color='#0080FE' size='20' /> transaylan@yahoo.com</span>
        <span className='flex justify-center gap-3 text-center'> <AiOutlinePhone color='#0080FE' size='20' /> 0778 644 567</span>
      </div>
      <div className='flex-1 mb-5'>
        <p className='flex justify-center items-center text-sm md:text-lg lg:text-1xl text-[#0080FE]'>ADRESSE</p>
        <span className='flex justify-center gap-3 text-center'> <CiLocationOn color='#0080FE' size='20' /> 06 rue du Maréchal Foch, 94310 Orly</span>
      </div>
      <div className='flex-1 mb-5'>
        <p className='flex justify-center items-center text-sm md:text-lg lg:text-1xl text-[#0080FE]'>HORAIRES D'OUVERTURE</p>
        <span  className='flex justify-center gap-3 text-center'> 
        <AiOutlineClockCircle color='#0080FE' size='20' />
        Du lundi au vendredi de 9h à 12h <br/>et de 14h à 18h</span>
      </div>
    </div>
  )
}
