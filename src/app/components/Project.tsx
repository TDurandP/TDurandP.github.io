'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { projetType } from '../types/projetType';
import { currentStackType } from '../types/currentStackType';

interface projectParamsType {
    projet: projetType,
    selected: string
}

export default function Project({ projet, selected } : projectParamsType) {


    // ${projet.title.toLowerCase().includes(selected.toLowerCase()) ? 
    // style={{transform: projet.title.toLowerCase().includes(selected.toLowerCase()) ? "translate: '0wv'" : ''}}
    const [currentStackTags, setCurrentStackTags] = useState<currentStackType | null>({ label: 'front', tags: projet.stack.front });
    const [readMode, setReadMode] = useState<"basic" | "description">("basic");
    const [descriptionModeIndex, setDescriptionModeIndex] = useState<number>(0);

    return (
        <div className={`${projet.title.toLowerCase().includes(selected.toLowerCase()) ? 'opacity-100' : 'opacity-25'} adaptOpacity overflow-hidden w-screen h-full flex flex-row justify-center items-center`}>
            <div className="flex xs:flex-col md:items-center lg:items-center xs:justify-start xs:items-center sm:flex-col sm:justify-start sm:items-start 2xl:flex-row 2xl:justify-center 2xl:items-center xl:flex-row xl:justify-center xl:items-center xs:w-full sm:w-full 2xl:4/5 xl:w-4/5 h-full">
                <div className='flex flex-row justify-start items-start xs:w-full sm:w-full 2xl:w-3/4 xl:w-3/4'>
                    <div className="xs:hidden sm:hidden 2xl:flex xl:flex flex flex-col justify-start items-start min-h-[700px]">
                        <div className='flex flex-row justify-start items-center'>
                            <h2 className="flex flex-row justify-center items-center w-20 h-10 bg-cream p-2 text-lg text-cyan-600 font-bold rounded border-b-4 cream-darker mx-2">{projet.date}</h2>
                        </div>
                        <div className="ml-12 w-1 flex-1 bg-cream"></div>
                    </div>

                    <div className='flex flex-col justify-start items-center w-full'>
                        {/*
                        <div className='flex flex-row justify-start items-center w-3/4'>
                            <h2 className='rounded p-2 bg-cream text-cyan-600 text-md border-b-4 cream-darker'>{projet.type}</h2>
                            <h2 className='rounded p-2 bg-cream text-cyan-600 text-md border-b-4 cream-darker'>{projet.title}</h2>
                        </div>*/}

                        <div className='flex flex-col justify-start items-center bg-cyan-700 xs:w-5/6 sm:w-5/6 lg:w-4/5 xl:w-4/5 2xl:w-4/5'>
                        <div className='flex flex-row justify-start items-center bg-cyan-700 w-full p-2'>
                        {/*<h2 className='text-white text-md'>{projet.type}</h2>
                        <h2 className='text-white text-md'>{projet.title}</h2>*/}
                        </div>
                            <div className="rounded corners-bottom relative flex flex-col justify-start items-center xs:min-h-[200px] min-h-[500px] w-full">
                                <iframe className="responsive-iframe px-4 pb-4" src={`https://www.youtube.com/embed/${projet.youtube}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-start items-start w-3/4 my-4">
                            <div className='w-full flex flex-row justify-start items-center'>
                                <div className='xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex w-full border-2 cream rounded'></div>
                                <p className='xs:text-sm xs:w-full text-cyan-600 w-3/4 bg-cream p-2 m-2 text-center rounded border-b-4 cream-darker'>Stack Technique</p>
                                <div className='xs:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex w-full border-2 cream rounded'></div>
                            </div>
                            <div className='flex xs:flex-col xs:justify-start xs:items-center flex-row justify-center items-center w-full xs:h-full sm:h-full h-10 my-1'>
                                <div onClick={() => setCurrentStackTags({ label: "front", tags: projet.stack.front })} className={`${currentStackTags?.label === "front" ? "bg-cream-darker" : ""} xs:my-1 sm:my-1 cursor-pointer transitionShowStack bg-cream flex flex-row justify-center items-center w-40 h-full rounded p-2 mx-2 border-b-4 cream-darker`}>
                                    <Image
                                        src={`./icons/front_cyan.svg`}
                                        width={25}
                                        height={25}
                                        alt={`Back icon`}
                                    />
                                    <p className='text-cyan-600 text-md ml-4'>Front</p>
                                </div>
                                <div onClick={() => setCurrentStackTags({ label: "back", tags: projet.stack.back })} className={`${currentStackTags?.label === "back" ? "bg-cream-darker" : ""} xs:my-1 sm:my-1 cursor-pointer transitionShowStack bg-cream flex flex-row justify-center items-center w-40 h-full rounded p-2 mx-2 border-b-4 cream-darker`}>
                                    <Image
                                        src={`./icons/back_cyan.svg`}
                                        width={25}
                                        height={25}
                                        alt={`Back icon`}
                                    />
                                    <p className='text-cyan-600 text-md ml-4'>Back</p>
                                </div>
                                <div onClick={() => setCurrentStackTags({ label: "db", tags: projet.stack.db })} className={`${currentStackTags?.label === "db" ? "bg-cream-darker" : ""} xs:my-1 sm:my-1 cursor-pointer transitionShowStack bg-cream flex flex-row justify-center items-center w-40 h-full rounded p-2 mx-2 border-b-4 cream-darker`}>
                                    <Image
                                        src={`./icons/db_cyan.svg`}
                                        width={25}
                                        height={25}
                                        alt={`Back icon`}
                                    />
                                    <p className='text-cyan-600 text-md ml-4'>Data</p>
                                </div>
                                <div onClick={() => setCurrentStackTags({ label: "external", tags: projet.stack.external })} className={`${currentStackTags?.label === "external" ? "bg-cream-darker" : ""} xs:my-1 sm:my-1 cursor-pointer transitionShowStack bg-cream flex flex-row justify-center items-center w-40 h-full rounded p-2 mx-2 border-b-4 cream-darker`}>
                                    <Image
                                        src={`./icons/link_cyan.svg`}
                                        width={25}
                                        height={25}
                                        alt={`External icon`}
                                    />
                                    <p className='text-cyan-600 text-md ml-4'>External</p>
                                </div>
                            </div>

                            <div className='flex flex-row justify-center items-center w-full h-10 my-1'>
                                {currentStackTags != null && currentStackTags.tags.map((type1: string, index: number) => (<p key={`${type1}-${index}`} className={`fadeIn flex flex-row justify-center items-center cursor-pointer w-40 bg-cream hover:bg-cream-darker rounded text-cyan-600 text-sm p-2 h-10 m-2`}>{type1}</p>))}
                            </div>

                        </div>
                    </div>
                </div>





                <aside className="flex flex-col justify-start items-center xs:w-3/4 sm:w-3/4  2xl:w-1/4 xl:w-1/4 bg-cream xs:h-full sm:h-full 2xl:h-[700px] xl:h-[700px] border-b-4 cream-darker">
                    <h2 className='bg-cyan-700 text-cream flex flex-row justify-center items-center p-2 text-lg w-full '>{projet.title}</h2>
                    <p className='bg-cream-darker text-cyan-600 p-2 m-2 text-md w-full px-8'>{projet.subtitle}</p>
                    <div className='w-full flex flex-row justify-start items-center'>
                        <p onClick={() => setReadMode("basic")} className={`${readMode === "basic" ? 'bg-cyan-700 text-cream' : 'bg-cream-darker text-cyan-600'} adaptBg cursor-pointer w-1/2 p-2 text-center`}>Résumé</p>
                        <p onClick={() => setReadMode("description")} className={`${readMode === "description" ? 'bg-cyan-700 text-cream' : 'bg-cream-darker text-cyan-600'} adaptBg cursor-pointer w-1/2 p-2 text-center`}>Description</p>
                    </div>
                    <div className='h-3/4 overflow-y-auto'>
                        {readMode === "basic" && <ul className='flex flex-col justify-around items-center fadeIn text-cyan-600 text-sm h-full'>
                            {projet.summary.map((key, index) => <div key={key} className='w-full flex flex-row justify-start items-center'>
                                <Image
                                    src={`./icons/key_cyan.svg`}
                                    width={25}
                                    height={25}
                                    alt={`Key icon`}
                                    className='m-2'
                                />
                                <li key={index} className='w-full p-2 first-letter:text-xl text-balance'>{key}</li></div>)}
                        </ul>
                        }

                        {readMode === "description" && <div className='flex flex-col justify-start items-between fadeIn text-cyan-600 text-sm h-full'>

                            <div className='w-full h-full flex flex-col justify-evenly items-start'>
                                {projet.description[descriptionModeIndex].paragraphes.map((key, index) => <p key={`${key}-${index}`} className='fadeIn text-cyan-600 w-full p-2 first-letter:text-xl text-md text-balance'>{key}</p>)}
                            </div>

                        </div>}
                    </div>

                    {readMode === "description" && <div className='w-full flex flex-row justify-center items-center my-2'>
                        <div onClick={() => setDescriptionModeIndex(0)} className={`${descriptionModeIndex == 0 ? 'bg-cyan-600 scale-110' : 'bg-cream-darker'} hover:scale-125 adaptScale cursor-pointer adaptBg w-4 h-4 rounded mx-2`} />
                        <div onClick={() => setDescriptionModeIndex(1)} className={`${descriptionModeIndex == 1 ? 'bg-cyan-600 scale-110' : 'bg-cream-darker'} hover:scale-125 adaptScale cursor-pointer adaptBg w-4 h-4 rounded mx-2`} />
                    </div>}

                    <div className='w-full flex flex-row justify-start items-center p-4'>
                        <div className='flex flex-row justify-center items-center w-1/2 rounded bg-cream-darker mx-1'>
                            <Image
                                src={`./icons/activity_cyan.svg`}
                                width={25}
                                height={25}
                                alt={`Key icon`}
                                className='m-2'
                            />
                            <p className='text-cyan-600'>Terminé</p>
                        </div>
                        <div className='flex flex-row justify-center items-center w-1/2 rounded bg-cream-darker mx-1'>
                            <Image
                                src={`./icons/github_cyan.svg`}
                                width={25}
                                height={25}
                                alt={`Github icon`}
                                className='m-2'
                            />
                            <p className='text-cyan-600'>Privé</p>
                        </div>
                    </div>


                    {/*                   <p className='w-1/2 flex flex-row justify-center items-center bg-cyan-600 border-b-4 border-cyan-700 text-cream text-md p-2 m-2 rounded'>
                        <a href="menestrel.fr">Accéder à Ménestrel.</a>
                    </p>*/}

                </aside>
            </div>
        </div>
    )
}
