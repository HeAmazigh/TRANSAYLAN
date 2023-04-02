import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Spinner from 'react-bootstrap/Spinner';

import { useToasts } from 'react-toast-notifications';

export const Form = () => {
  const [send, setSend] = useState(false);
  const formContact = useRef();
  const { addToast } = useToasts();

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);
    emailjs.sendForm(
        'service_66yp60m', 
        'template_cd5olwg', 
        formContact.current, 
        'nXniB3oDz0HCAonDi'
      )
      .then((result) => {
        if(result.status == 200) {
          addToast('Demande envoyé avec succès !', { appearance: 'success' });
          e.target.reset();
          setSend(false);
        };

      }, (error) => {
        addToast('Erreur d\'envoi ', { appearance: 'error' });
        setSend(false);
      });
  };

  return (
    <div id='devis' className='w-full px-1 -mt-36 md:px-20 lg:px-48 z-50'>
      <div className='w-full bg-white m-auto shadow-2xl rounded-lg p-1 xs:p-4 ≠md:p-4'>
        <div className='text-center text-lg md:text-3xl text-[#0080FE] font-bold'>Obtenir un devis gratuit</div>
        <form ref={formContact} onSubmit={sendEmail} className="flex flex-col gap-5 mt-6">
          <div className='flex flex-col md:flex-row items-center justify-between gap-3 px-2 md:px-20'>
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' 
              type="text" 
              placeholder='Nom / Prénom'
              name="fullname" 
              required
            />
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md'
              type="email" 
              placeholder='E-mail'
              name="email" 
              required
            />
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' 
              type="phone" 
              placeholder='Téléphone'
              name="phone" 
              required
            />
            <input
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' 
              type="date" 
              placeholder='Date du déménagement'
              name="date" 
              required
            />
          </div>
          <div className='flex flex-col md:flex-row items-center justify-between gap-3 px-2 md:px-20'>
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md'
              type="text"
              placeholder='Ville de départ'
              name="dcity" 
              required
            />
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md'
              type="text" 
              placeholder='Code postal ville de départ'
              name="dpc" 
              required
            />
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' 
              type="text" 
              placeholder='Ville d’arrivée'
              name="acity" 
              required
            />
            <input 
              className='w-full border-2 border-slate-100 text-xs h-7 px-4 rounded-md' 
              type="text" 
              placeholder='Code postal ville d’arrivée'
              name="apc" 
              required
            />
          </div>
          <textarea 
            className='mx-2 md:mx-20 border-2 border-slate-100 text-xs h-14 px-4 rounded-md' 
            placeholder='Message'
            name="message" 
            required
          >

          </textarea>
          <div className='text-center'>
            <button  className='bg-[#0080FE] text-white py-2 px-2 md:px-4 rounded-sm hover:bg-[#0080FE] transition-colors ease-linear' disabled={send}>
            {send && <Spinner
              className='mr-2'
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            /> }
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
