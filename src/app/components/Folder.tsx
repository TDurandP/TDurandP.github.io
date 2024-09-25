import React from 'react';
import Image from 'next/image';

export default function Folder({ projet }) {

  return (
    
    <div className='w-1/5 flex flex-col justify-start items-center'>
      <div className='w-full bg-gray-4 relative top-10 h-5'></div>
      <div className='w-full h-10 flex flex-row justify-start items-end z-50'>
        <div className='bg-cream-alt w-1/3 h-full'><p>{projet.title}</p></div>
        <div className='triangle w-1/3 h-full'><p>{projet.date}</p></div>
      </div>
      <div className='flex flex-col justify-start items-start w-full bg-gray-3 min-h-60'>

        <p>{projet.subtitle}</p>
        {/*
        <Image src={'/thumbnails/nonogram.jpg'} alt='Thumbnail nonogram project' width={100} height={100}/>
        {projet.keys.map((key, index) => <p key={index}>{key}</p>)}*/}



      </div>
      <div className='triangle-reversed w-full flex flex-row justify-start items-center'>
        <div className='w-1/3 h-full flex flex-row justify-start items-center'>
          <Image src={`/languages/${projet.stack.front}.png`} alt='Thumbnail nonogram project' width={30} height={30} />
          <p className='text-md font-gray-alt'>{projet.stack.front}</p>
        </div>
        <div className='w-1/3 h-full flex flex-row justify-start items-center'>
          <Image src={`/languages/${projet.stack.back}.png`} alt='Thumbnail nonogram project' width={30} height={30} />
          <p className='text-md font-gray-alt'>{projet.stack.back}</p>
        </div>
        <div className='w-1/3 h-full flex flex-row justify-start items-center'>
          <Image src={`/languages/${projet.stack.data}.png`} alt='Thumbnail nonogram project' width={30} height={30} />
          <p className='text-md font-gray-alt'>{projet.stack.data}</p>
        </div>

      </div>
    </div>
  )
}
