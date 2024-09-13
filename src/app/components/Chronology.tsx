'use client';

import React, {SetStateAction, useState} from 'react';
import { Dispatch } from 'react';

interface ChronologyProps {
    setProject: Dispatch<SetStateAction<'nonogram' | 'ménestrel' | 'portfolio' | 'toshilive' | 'xboxhq'>>
    project: string;
  }

export default function Chronology({setProject, project} : ChronologyProps) {
  /*  <div className='w-20 h-12 flex flex-row justify-center items-center rounded bg-cream border-b-4 cream-darker'>
    <p className='rotate-30 text-cyan-600 p-2 m-0 text-sm'>2025</p></div>
    
    
     <div className={`${project === "nonogram" ? 'rounded-r-full bg-cyan-600 text-white' : 'text-cyan-600'} w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
    */

    const manageNavWaveBg = () => {
        switch(project){
            case 'nonogram':
                return "w-1/5";
            break;
            case 'ménestrel':
                return "w-2/5";
            break;
            case 'portfolio':
                return "w-3/5";
            break;
            case 'xboxhq':
                return "w-4/5";
            break;
            case 'toshilive':
                return "w-full";
            break;
        }
    }


  return (
      <nav className='relative xs:text-xs sm:w-1/3 xs:w-full md:w-2/3 lg:w-2/3 xl:w-1/3 2xl:w-1/4 h-16 flex flex-row justify-between items-center bg-cream my-8 rounded'>
        <div className={`adaptWidth absolute top-0 left-0 ${manageNavWaveBg()} h-full rounded bg-cyan-600 border-r-4 border-cyan-500`}></div>
        <div onClick={() => setProject('nonogram')} className={`${project === "nonogram" ? 'text-white' : 'text-cyan-500'} adaptScale cursor-pointer scale-100 hover:scale-110 adaptColor z-50 w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
            <p className='w-full text-center'>Nonogram</p>
            {/*<p className='w-0'>Développement d'un casse-tete</p>*/}
        </div>
        <div onClick={() => setProject('ménestrel')} className={`${project === "ménestrel" ? 'text-white' : 'text-cyan-500'} adaptScale cursor-pointer scale-100 hover:scale-110 adaptColor z-50 w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
            <p className='w-full text-center'>Ménéstrel</p>
            {/*<p className='w-0'>Répertoire des chants historiques français</p>*/}
        </div>
        <div onClick={() => setProject('portfolio')} className={`${project === "portfolio" ? 'text-white' : 'text-cyan-500'} adaptScale cursor-pointer scale-100 hover:scale-110 adaptColor z-50 w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
            <p className='w-full text-center'>Portfolio</p>
            {/*<p className='w-0'>Portfolio de fin d'études en G.M.P</p>*/}
        </div>
        <div onClick={() => setProject('xboxhq')} className={`${project === "xboxhq" ? 'text-white' : 'text-cyan-500'} adaptScale cursor-pointer scale-100 hover:scale-110 adaptColor z-50 w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
            <p className='w-full text-center'>XBOXHQ</p>
            {/*<p className='w-0'>Gestion des jeux Xbox 1ère génération</p>*/}
        </div>
        <div onClick={() => setProject('toshilive')} className={`${project === "toshilive" ? 'text-white' : 'text-cyan-500'} adaptScale cursor-pointer scale-100 hover:scale-110 adaptColor z-50 w-32 h-full flex flex-row justify-start items-center overflow-hidden`}>
            <p className='w-full text-center'>ToshiLive</p>
            {/*<p className='w-0'>Extension WEB API Twitch</p>*/}
        </div>
      </nav>
  )
}
