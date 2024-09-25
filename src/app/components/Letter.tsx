import React, { useEffect, useState } from 'react';
import { getRandomDuration, pickRandomCharacter } from '../utils';

export default function Letter({ letter }) {
    const [currentLetter, setCurrentLetter] = useState('');
    //const [speed, setSpeed] = useState(getRandomDuration() * 10);
    const speed = getRandomDuration() * 10
    const [currentCooldown, setCurrentCooldown] = useState<number>(0);
    useEffect(() => {
        console.log('random duration : ' + getRandomDuration());

        const letterInterval = setInterval(() => {
            setCurrentLetter(pickRandomCharacter())
            setCurrentCooldown(prevCooldown => prevCooldown + 1);
        }, speed)


        if(currentCooldown === 10) {
            clearInterval(letterInterval);
            setCurrentLetter(letter);
        }


        return () => {
            clearInterval(letterInterval)
        };
    }, [currentCooldown])

    return (
        <span className='xs:text-md sm:text-md md:text-md lg:text-lg xl:text-lg'>{currentLetter}</span>
    )
}
