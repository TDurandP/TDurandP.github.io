import { useEffect, useState } from 'react';


const getRandomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return letters[Math.floor(Math.random() * letters.length)];
};



const RandomSpan = ({ text }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let timeoutIds = [];
    const totalDuration = 4000; // 4 seconds
    const cooldown = 500; // Adjust the cooldown time as needed
    const maxLetters = Math.floor(totalDuration / cooldown);

    text.split('').forEach((letter, index) => {
      if (index < maxLetters) {
        const timeoutId = setTimeout(() => {
          setContent((prev) => prev + getRandomLetter());
        }, index * cooldown);
        timeoutIds.push(timeoutId);
      }
    });

    const finalTimeoutId = setTimeout(() => {
      setContent(text);
    }, totalDuration);

    timeoutIds.push(finalTimeoutId);

    // Cleanup timeouts on component unmount
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [text]);

  return <div data-content={content}>{content}</div>;
};



export default RandomSpan;