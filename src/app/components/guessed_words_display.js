import React, { useEffect } from 'react';

const GuessedWordsDisplay = ({ guessedWords }) => {
  useEffect(() => {
    console.log('Guessed Words:', guessedWords);
  }, [guessedWords]);

  return (
    <div>
      {guessedWords.map((word, index) => (
        <div key={index} className="flex mb-2">
          {word.split('').map((letter, letterIndex) => (
            <div key={letterIndex} className="m-2 p-2 bg-gray-800 text-white rounded border">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuessedWordsDisplay;