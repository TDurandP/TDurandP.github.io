import React from 'react';
import Image from 'next/image';

export default function Profile({position}) {


    return (
        <div className="w-60 h-60 flex flex-row justify-center items-start">
            <div className="absolute w-[200px] h-[200px] flex flex-row justify-start items-start border-lines">
                <Image src={'/img/ProfilPicBackground.jpg'} alt='Background profil pic' layout="fill" objectFit="contain" />
                <Image style={{ left: `${position / 150}px` }} className="absolute top-0 left-0" src={'/img/ProfilPicFront.png'} alt='Front profil pic' layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}
