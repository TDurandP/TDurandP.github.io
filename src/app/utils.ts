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
    return allCharacters[Math.floor(Math.random() * allCharacters.length)];
  };


  const addDynamicWord = (word : string) => {
    return word.split('');
  };

  const getRandomDuration = () : number => {
    return Math.floor(Math.random() * 25) + 1;
  };
  


export {pickRandomCharacter, addDynamicWord, getRandomDuration};