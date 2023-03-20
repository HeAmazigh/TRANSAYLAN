import React from 'react'
import Image from 'next/image'

import {bannerData} from '../../db/data';
import { Form } from '../form/Form.component';

export const Banner = () => {
  return (
    <div className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[680px]">
      <Image 
        className="-z-10"
        src={bannerData.img}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="w-full">
        <div className='flex flex-col items-center justify-center gap-1 md:gap-24 w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[680px]'>
          <div className='w-[80%] sm:w-[59%] md:w-[50%] md:top-36 md:left-24 lg:w-[50%] text-left px-5 md:px-10 -mt-36 border-l-[10px] md:border-l-[15px] border-[#0080FE]'>
            <div>
              <p className='text-md md:text-2xl lg:text-5xl my-3 text-white'>{bannerData.title} </p>
              <p className='text-xs md:text-1xl lg:text-2xl my-3 text-white/75' dangerouslySetInnerHTML={{ __html: bannerData.descriptionOne }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}