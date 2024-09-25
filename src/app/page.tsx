'use client';

import { useState } from "react";
import Profile from "./components/Profile";
import Letter from "./components/Letter";
import { addDynamicWord } from "./utils";
import TextIcon from "./components/TextIcon";
import { nonogramProject } from "./projects/nonogram";
import Projet from "./components/Projet";
import { menestrelProject } from "./projects/menestrel";
import { portfolioLProject } from "./projects/portfolioL";
import { toshiliveProject } from "./projects/toshilive";
import { xboxhqProject } from "./projects/xboxhq";
import { webdows7Project } from "./projects/webdows7";
import Image from "next/image";

export default function Home() {
  const [position, setPosition] = useState<number>(0);
  //const [theme, setTheme] = useState<string>('Web');

  /*const retrieveURL = (): string => {
    return document.baseURI.toString();
  }*/

  const handleMouseMove = (e) => {
    //const minX = -5;
    //const maxX = 5;
    //const clampedX = Math.max(minX, Math.min(maxX, e.clientX));
    setPosition(e.clientX - (e.nativeEvent.view.innerWidth / 2));
  };

  //      {/*<Chamber theme={theme} setTheme={setTheme} />*/}
  return (
    <main onMouseMove={(e) => handleMouseMove(e)} className="h-full flex flex-col justify-start items-center">



      <header className="relative w-full h-screen">
        <div className="z-10 h-screen w-full bg-gray-1"></div>
        <div className="lines px-10">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="z-20 absolute top-0 left-0 flex flex-col justify-around items-center corners h-[calc(100vh-8rem)] w-[calc(100vw-8rem)] m-16">
          <h2 className="text-6xl font-barCode">tdurandp.github.io</h2>
          <Profile position={position} />

          <div className="w-full flex flex-col justify-start items-center">
            <div className="relative sm:h-10 xs:h-10 md:h-12 lg:h-20 xl:h-20 slideFromLeft flex flex-row justify-center items-center font-cream bg-cream xs:p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4 text-2xl font-gray-alt font-wwDigital xs:w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/4">
              <div className="flex flex-row justify-start items-center">{addDynamicWord("DURAND").map((letter, index) => { return <Letter key={index} letter={`${letter}`}></Letter> })}</div>
              <div className="flex flex-row justify-start items-center pl-2">{addDynamicWord("Thomas").map((letter, index) => { return <Letter key={index} letter={`${letter}`}></Letter> })}</div>
            </div>
            <div className="relative sm:h-10 xs:h-10 md:h-12 lg:h-20 xl:h-20 slideFromRight flex flex-row justify-center items-center font-cream bg-cream xs:p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4 text-2xl font-gray-alt font-wwDigital xs:w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/4">
              <div className="flex flex-row justify-start items-center">{addDynamicWord("Développeur").map((letter, index) => { return <Letter key={index} letter={`${letter}`}></Letter> })}</div>
              <div className="flex flex-row justify-start items-center pl-2">{addDynamicWord("WEB").map((letter, index) => { return <Letter key={index} letter={`${letter}`}></Letter> })}</div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center xs:w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 bg-gray-4 p-2 xs:m-1 sm:m-1 md:m-1 lg:m-2 xl:m-2 font-wwDigital font-cream  xs:text-md sm:text-md md:text-md lg:text-lg xl:text-lg">
            <p>Développeur web de formation, je vous invite à découvrir toutes mes réalisations notables sur ce portfolio.</p>
          </div>

          <div className="w-full flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row xs:justify-start xs:items-center  sm:justify-start sm:items-center  md:justify-start md:items-center lg:justify-around lg:items-center xl:justify-around xl:items-center">
            <TextIcon text={"+33 06 70 51 85 53"} icon={"phone"} />
            <TextIcon text={"durandthomaspro@laposte.net"} icon={"mail"} />
            <TextIcon text={"LinkedIn profile"} icon={"linkedin"} link={"https://www.linkedin.com/in/thomas-durand-b22552181/"} />
          </div>
        </div>
      </header>



      
      <div className="bg w-full flex flex-col justify-start items-center">
        <div className="xs:w-full sm:w-full bg-cream p-2 m-2 flex xs:flex-col xs:justify-start xs:items-center sm:flex-col sm:justify-start sm:items-center md:flex-row md:justify-between md:items-center lg:flex-row lg:justify-between lg:items-center xl:flex-row xl:justify-between xl:items-center mt-8">
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/HTML5.png`} alt='HTML5 PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>HTML5</p>
          </div>
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/CSS3.png`} alt='CSS3 PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>CSS3</p>
          </div>
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/Tailwind.png`} alt='Tailwind PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>Tailwind</p>
          </div>
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/Typescript.png`} alt='Typescript PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>Typescript</p>
          </div>
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/React.png`} alt='React PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>React</p>
          </div>
          <div className='w-40 xs:p-2 sm:p-2 h-full flex flex-row  xs:justify-between sm:justify-between  md:justify-between lg:justify-center xl:justify-center items-center'>
            <Image src={`/languages/NextJS.png`} alt='NextJS PNG icon' width={30} height={30} />
            <p className='ml-2 text-sm font-fakeReceipt font-gray-alt'>NextJS</p>
          </div>

        </div>

        <div className="w-full flex flex-wrap flex-row justify-center items-center">
          <Projet projet={nonogramProject} />
          <Projet projet={menestrelProject} />
          <Projet projet={portfolioLProject} />
        </div>

        <div className="w-full flex flex-wrap flex-row justify-center items-center my-8">
          <Projet projet={toshiliveProject} />
          <Projet projet={xboxhqProject} />
          <Projet projet={webdows7Project} />
        </div>
      </div>

      <footer className="m-0 bg-cream font-gray w-full flex flex-row justify-center items-center">
        <p className="p-4">Portfolio Thomas DURAND - 2024</p>
      </footer>
    </main>
  );
}
