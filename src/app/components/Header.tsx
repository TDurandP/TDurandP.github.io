'use client';

import React, { MutableRefObject, useEffect, useState } from 'react';
import Image from 'next/image';
import useCooldown from '../hooks/useCooldown';

interface HeaderParamsType {
    scrollProjectsRef: MutableRefObject<HTMLDivElement | null>
}

export default function Header({scrollProjectsRef} : HeaderParamsType) {

    const [showLinkedin, setShowLinkedin] = useState<Boolean>(false);
    const messageAuto = useState<motd>();
    const [cooldown, setCooldown] = useCooldown(5);
    const [motdIndex, setMotdIndex] = useState<number>(0);



    interface motd {
        index: number;
        message: string;
    }


    const messages: motd[] = [{ index: 0, message: "Bienvenue sur mon portfolio." },
    { index: 1, message: "Découvrez mes compétences et savoir-faire" },
    { index: 2, message: "Visualiser mes réalisations" },
    { index: 2, message: "Ne manquez pas de me contacter" }]





    useEffect(() => {
        if (cooldown === 0) {
            if (motdIndex == messages.length - 1) setMotdIndex(0);
            else setMotdIndex(motdIndex + 1);
            if (typeof setCooldown === 'function') {
                setCooldown(5);
            }
        }
    }, [cooldown])

    const browseProjects = () => {
        // eslint-disable-next-line
        if(scrollProjectsRef.current != null) scrollProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    

    return (

        <header className='flex flex-col justify-between items-center bg-cyan-700 w-full pt-4 px-4 min-h-screen border-b-4 cream'>

            <div className="w-fill flex xs:flex-col xs:justify-start xs:items-center sm:flex-col sm:justify-start sm:items-center lg:flex-row lg:justify-center lg:items-center">
                <Image
                    src={`./img/ProfilPic.jpg`}
                    width={150}
                    height={150}
                    alt={`Photo profil`}
                    className="rounded border-4 cream m-2"
                />

                <div className='sm:my-4 w-fill h-full flex flex-col justify-between items-start'>
                    <div className={`w-full h-10 flex flex-row justify-start items-center m-2`}>
                        <div className='w-1 h-full bg-cream rounded mr-2' />
                        <Image
                            src={`./icons/mail.svg`}
                            width={30}
                            height={30}
                            alt={`Mail icon`}
                        />
                        <p className={`rounded bg-cream flex flex-row justify-center items-center text-md text-cyan-600 p-1 h-full mx-2`}><a className='showOpacity' href="https://www.linkedin.com/in/thomas-durand-b22552181/">durandthomaspro@laposte.net</a></p>
                    </div>
                    <div className={`w-full h-10 flex flex-row justify-start items-center m-2`}>
                        <div className='w-1 h-full bg-cream rounded mr-2' />
                        <Image
                            src={`./icons/phone.svg`}
                            width={30}
                            height={30}
                            alt={`Phone icon`}
                        />
                        <p className={`rounded bg-cream flex flex-row justify-center items-center text-md text-cyan-600 p-1 h-full mx-2`}><a className='showOpacity' href="https://www.linkedin.com/in/thomas-durand-b22552181/">(+33) 06 70 51 85 53</a></p>
                    </div>
                    <div className={`w-full h-10 flex flex-row justify-start items-center m-2`}>
                        <div className='w-1 h-full bg-cream rounded mr-2' />
                        <Image
                            src={`./icons/linkedin.svg`}
                            width={30}
                            height={30}
                            alt={`Linkedin icon`}
                        />
                        <p className={`rounded bg-cream flex flex-row justify-center items-center text-md text-cyan-600 p-1 h-full mx-2`}><a className='showOpacity' href="https://www.linkedin.com/in/thomas-durand-b22552181/">LinkedIn</a></p>
                    </div>
                </div>

            </div>
            <div className='xs:my-4 w-full flex flex-col justify-start items-center'>
                <div className='w-1/2 xs:w-full flex xs:flex-col xs:justify-start xs:items-center sm:flex-col sm:justify-start sm:items-center lg:flex-row lg:justify-evenly lg:items-center'>
                    <h2 className="lg:w-1/2 sm:w-full bg-cream capitalize p-2 text-center text-cyan-600 text-2xl rounded border-b-4 cream-darker m-2">DURAND Thomas</h2>
                    <h2 className="lg:w-1/2 sm:w-full bg-cream capitalize p-2 text-center text-cyan-600 text-2xl rounded border-b-4 cream-darker m-2">Développeur WEB</h2>
                </div>

                <div className='2xl:w-1/3 lg:w-1/2'>
                    <div key={`${messages[motdIndex].message}-${messages[motdIndex].index}`} className='flex flex-row justify-center items-center bg-cream rounded h-10 m-2 text-nowrap showMotd overflow-hidden'>
                        <h2 className='xl:text-xl 2xl:text-2xl xs:text-sm text-cyan-600 p-2'>{messages[motdIndex].message}</h2>
                    </div>
                </div>
            </div>

            <div className='w-full flex  xs:flex-col xs:justify-start xs:items-center sm:flex-col sm:justify-start sm:items-center md:flex-col md:justify-start md:items-center lg:flex-row lg:justify-center lg:items-start'>
                <div className='mx-10 2xl:my-0 xl:my-0 lg:my-0 xs:my-4 xs:w-full sm:my-4 sm:w-1/2 md:my-10 2xl:w-1/4 xl:w-1/3 lg:w-1/2 md:w-1/2 h-full flex flex-col justify-start items-start bg-cyan-600 rounded p-2 border-b-4 cream'>
                    <div className='w-full flex flex-row justify-start items-center'>
                        <div className='p-2 rounded bg-cream'>
                            <Image
                                src={`./icons/award_cyan.svg`}
                                width={30}
                                height={30}
                                alt={`Award icon`}
                            />
                        </div>
                        <h2 className='text-cream xl:text-md 2xl:text-lg ml-2'>Développeur WEB de formation</h2>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement Full-stack</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement Mobile</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement API Rest & Base de données</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Prise en main de projets/framework internes existants</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Hébergement</p>
                    </div>

                </div>

                <div className='relative mx-10 2xl:my-0 xl:my-0 lg:my-0 xs:my-4 xs:w-full md:my-10 2xl:w-1/4 xl:w-1/3 lg:w-1/2 md:w-1/2 h-full flex flex-col justify-start items-start bg-cyan-600 rounded p-2 border-b-4 cream'>
                    <p className='absolute bg-white text-lg text-cyan-600 p-4 m-2 animate-pulse rotate-45 rounded top-[-10px] right-[-25px]'>A venir !</p>
                    <div className='w-full flex flex-row justify-start items-center'>
                        <div className='p-2 rounded bg-cream'>
                            <Image
                                src={`./icons/heart_cyan.svg`}
                                width={30}
                                height={30}
                                alt={`Heart icon`}
                            />
                        </div>
                        <h2 className='w-full text-pretty text-cream xl:text-md 2xl:text-lg ml-2'>Développeur polyvalent de passion</h2>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement Unity</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement mods</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Développement BASH</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Pixel-Art et 3D</p>
                    </div>
                    <div className='w-full h-12 flex flex-row justify-start items-center text-cream my-2'>
                        <Image
                            src={`./icons/terminal.svg`}
                            width={30}
                            height={30}
                            alt={`Discover icon`}
                            className='mr-2'
                        />
                        <p className='w-2/3 text-pretty'>Prototypage Web-Design</p>
                    </div>

                </div>
            </div>

            <div className='xs:my-4 adaptColor hover:border-cyan-600 cursor-pointer button animate-bounce mb-10 xl:w-1/3 2xl:w-1/4 flex flex-row justify-between items-center p-4 bg-cream rounded border-b-4 cream-darker'>
                <p onClick={() => browseProjects()} className='2xl:text-2xl xl:text-xl text-cyan-600'>Découvrir mes réalisations</p>
                <Image
                    src={`./icons/arrow-down_cyan.svg`}
                    width={30}
                    height={30}
                    alt={`Discover icon`}
                    className='ml-2 animate-pulse hover:scale-110'
                />

            </div>
        </header>


    )

}
