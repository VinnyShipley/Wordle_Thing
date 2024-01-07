'use client'
import React from 'react';

const GuessedWordsDisplay = ({ guessedWords }) => {
  return (
    <div className="flex flex-col mb-2">
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