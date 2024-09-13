'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import Chronology from "./components/Chronology";
import Project from "./components/Project";
import Header from "./components/Header";
import { nonogram } from "./projets/nonogram";
import { menestrel } from "./projets/menestrel";
import { portfolioL } from "./projets/portfolioL";
import { xboxhq } from "./projets/xboxhq";
import { toshilive } from "./projets/toshilive";

export default function Home() {

  const [project, setProject] = useState<'nonogram' | 'ménestrel' | 'portfolio' | 'toshilive' | 'xboxhq'>('nonogram');
  const scrollProjectsRef = useRef<HTMLImageElement>(null);

  const handleHighlightProject = () => {
    switch (project) {
      case "nonogram":
        return 'translate-100';
        break;
      case "ménestrel":
        return 'translate-200';
        break;
      case "portfolio":
        return 'translate-300';
        break;
      case "xboxhq":
        return 'translate-400';
        break;
      case "toshilive":
        return 'translate-500';
        break;
    }
  }

  const typesProjects = ["WEB", "Extension", "C#", "Unity", "Mobile", "CMD", "Misc"]

  {/*
      <div className="flex flex-row justify-start items-center w-full">
        <div className='w-full flex flex-row justify-start items-center bg-cream'>
          <div className='p-2'>
            <Image
              src={`./icons/award_cyan.svg`}
              width={30}
              height={30}
              alt={`Award icon`}
            />
          </div>
          <h2 className='text-cyan-600 text-lg ml-2'>Réalisations - développeur WEB</h2>
        </div>
        <div className='w-full flex flex-row justify-start items-center bg-cream'>
          <div className='p-2'>
            <Image
              src={`./icons/heart_cyan.svg`}
              width={30}
              height={30}
              alt={`Heart icon`}
            />
          </div>
          <h2 className='text-cyan-600 text-lg ml-2'>Réalisations - développeur polyvalent</h2>
        </div>
      </div>


      <div className="flex flex-row justify-start items-center w-3/4">
        {typesProjects.map((type, index) => <p key={index}  className="filter cursor-pointer w-20 bg-cream hover:bg-cream-darker rounded text-center text-cyan-600 text-md p-2 h-10 m-2">{type}</p>)}
      </div>*/}

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header scrollProjectsRef={scrollProjectsRef} />
      <Image src={`./icons/archive.svg`} width={100} height={100} alt={`Archive projects icon`} className="mt-10 mb-5" ref={scrollProjectsRef} />
      <Chronology setProject={setProject} project={project} />
      <div className="w-3/4 h-1 bg-cream rounded my-8" />
      <div className="w-full xs:h-[1400px] sm:h-[1400px] 2xl:h-[800px] xl:h-[800px] relative flex flex-row justify-center items-center overflow-hidden">
        <div className={`absolute top-0 left-0 ${handleHighlightProject()} flex flex-row  xs:items-start justify-start 2xl:items-center xl:items-center adaptTranslate`}>
          <Project projet={nonogram} selected={project} />
          <Project projet={menestrel} selected={project} />
          <Project projet={portfolioL} selected={project} />
          <Project projet={xboxhq} selected={project} />
          <Project projet={toshilive} selected={project} />
        </div>
      </div>

      <footer className="w-full h-28 bg-cyan-700 flex flex-row justify-center items-center">
        <p className="text-cream">Portfolio DURAND Thomas - 2024</p>
      </footer>
    </main>
  );
}
