import React from 'react'

export const Form = () => {
  return (
    <div id='devis' className='w-full px-1 -mt-36 md:px-20 lg:px-48 z-50'>
      <div className='w-full bg-white m-auto shadow-2xl rounded-lg p-1 xs:p-4 md:p-4'>
        <div className='text-center text-lg md:text-3xl text-[#fd8704] font-bold'>Obtenir un devis gratuit</div>
        <form className='flex flex-col gap-5 mt-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-3 px-2 md:px-20'>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="text" placeholder='Nom / Prénom'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="email" placeholder='E-mail'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="phone" placeholder='Téléphone'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="date" placeholder='Date du déménagement'/>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between gap-3 px-2 md:px-20'>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="text" placeholder='Ville de départ'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="text" placeholder='Code postal ville de départ'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="text" placeholder='Ville d’arrivée'/>
            <input className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' type="text" placeholder='ode postal ville d’arrivée'/>
          </div>
          <textarea className='mx-2 md:mx-20 border-2 border-slate-100 text-xs h-14 px-4 rounded-md' placeholder='Message'></textarea>
          <div className='text-center'>
            <button className='bg-[#fd8704] text-white py-2 px-2 md:px-4 rounded-sm hover:bg-[#fda847] transition-colors ease-linear'>Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  )
}
