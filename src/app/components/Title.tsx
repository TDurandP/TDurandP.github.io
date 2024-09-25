'use client';

import React, { memo, useEffect } from 'react';
import { styled, keyframes } from '../../../stitches.config';


const generateAlphabetArray = () => {
  const lowerCaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  const upperCaseLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  return [...lowerCaseLetters, ...upperCaseLetters];
};

const specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ':', '<', '>', ',', '.', '?', '/', '|', '`', '~'
];

const allCharacters = [...generateAlphabetArray(), ...specialCharacters];

const pickRandomCharacter = () => {
  return Math.floor(Math.random() * allCharacters.length);
};

const getRandomDuration = () => {
  return `${Math.floor(Math.random() * 3) + 1}s`;
};

const getRandomLettersAnimation = () => {
  return keyframes({
    '0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%': {
      content: `'${allCharacters[pickRandomCharacter()]}'`,
    },
    '100%': {
      content: 'attr(data-content)',
    },
  });
};

const StyledSpan = styled('span', {
  display: 'flex',
  width: '50px',
  height: '50px',
  '&::before': {
    content: 'oui',
    width: '50px',
    height: '50px',
    display: 'flex',
    animation: `${getRandomLettersAnimation()} ${getRandomDuration()} linear forwards`,
  },
});

const Letter = ({ key, letter }) => {
  return (
    <StyledSpan key={key} className='text-white text-2xl' data-content={`${letter}`}></StyledSpan>
  );
};

const Title = memo(({ word1, word2, direction }) => {
  const addDynamicWord = (word) => {
    return word.split('');
  };

  return (
    <div className={`h-20 flex flex-row justify-center items-center font-cream bg-gray-4 p-4 text-2xl text-cream font-wwDigital w-1/4`}>
      <div className='w-full h-full bg-rose-400'>
        {addDynamicWord('ok').map((letter, index) => <Letter key={index} letter={letter} />)}
      </div>
    </div>
  );
});

export default Title;
