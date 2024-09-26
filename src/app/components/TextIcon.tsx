'use client';

import React from 'react';
import Image from 'next/image';


interface textIconParamsType {
  text: string,
  icon: string,
  link: string
}

export default function TextIcon({text, icon, link = ""} : textIconParamsType) {

  return (
    <div className='mx-4 flex flex-col justify-start items-center xs:w-full sm:w-3/4 md:w-3/6 lg:w-2/6 xl:w-1/6'>
        <div className='border-b-4 border-gray-1 relative top-[1em] w-12 h-12 p-2 bg-gray-3'><Image src={`/icons/${icon}-cream.svg`} alt={`${icon} icon`} width={50} height={50}/></div>
        {link ? <h2 className='hover:bg-cream-alt flex flex-row justify-center items-center font-wwDigital bg-cream pt-4 p-2 xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full font-gray'><a className='hover:scale-110 scale-100' href={link}> {text}</a></h2> : <h2 className='flex flex-row justify-center items-center font-wwDigital bg-cream pt-4 p-2 xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full font-gray'>{text}</h2>}
    </div>
  )
}
