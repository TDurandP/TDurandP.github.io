import React from 'react';
import Image from 'next/image';
import { projectType } from '../types/projectType';

interface projetParamsType {
    projet: projectType
  }
export default function Projet({ projet } : projetParamsType) {
    return (
        <div className={`${projet.url ? 'opacity-100' : 'opacity-75'} xs:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 lg:h-[800px] xl:h-[800px] flex flex-col justify-start items-center bg-cream m-8`}>
            <div className="w-full h-22 bg-cream-alt font-gray p-2 text-sm font-fakeReceipt font-gray-alt">
                {projet.title}
            </div>
            {projet.url ? (
                <div className="w-full h-full flex flex-col justify-start items-center">
                    <div className="aspect-video flex flex-col justify-start items-center w-full">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${projet.url}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="w-full h-22 p-2 bg-cream-alt font-gray-alt text-sm font-fakeReceipt">
                        {projet.subtitle}
                    </p>
                    <div className='w-full h-full flex flex-col justify-around items-center'>
                        {projet.keys.map((paragraph, index) => (
                            <div key={index} className="w-full md:h-32 h-22 flex flex-col justify-start items-center">
                                <p className="w-4/5  h-20 my-2 font-wwDigital p-2">{paragraph}</p>
                                {projet.keys.length - 1 > index && <div className="w-1/2 rounded-xl bg-cream-alt h-[1px]"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <p className="animate-pulse flex flex-row justify-center items-center font-gray-alt text-xl font-fakeReceipt">
                        A venir !
                    </p>
                </div>
            )}

            <div className='h-20 w-full bg-cream-alt flex flex-row justify-around items-center'>
                <div className='flex flex-col justify-start items-center p-2 font-gray-alt'><Image src={`/icons/activity.svg`} alt={`Activity icon`} width={35} height={35} /><p>{projet.state}</p></div>
                <div className='flex flex-col justify-start items-center p-2 font-gray-alt'><Image src={`/icons/github.svg`} alt={`Github icon`} width={35} height={35} /><p>{projet.public}</p></div>
            </div>
        </div>
    )
}