import React from 'react';
import Image from 'next/image';

interface ProfileParamsType {
    position: number
}
export default function Profile({position} : ProfileParamsType) {
    return (
        <div className="xs:w-20 xs:h-20 w-60 h-60 flex flex-row justify-center items-start">
            <div className="absolute xs:w-[100px] xs:h-[100px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] flex flex-row justify-start items-start border-lines">
                <Image src={'/img/ProfilPicBackground.jpg'} alt='Background profil pic' layout="fill" objectFit="contain" />
                <Image style={{ left: `${position / 150}px` }} className="absolute top-0 left-0" src={'/img/ProfilPicFront.png'} alt='Front profil pic' layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}
