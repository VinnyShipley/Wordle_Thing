'use client'
import React from 'react';

const GuessedWordsDisplay = ({ guessedWords }) => {
  return (
    <div className="mb-2">
      {guessedWords.map((word, wordIndex) => (
        <div key={wordIndex} className="m-2 p-2 text-white rounded justify-center" style={{ display: 'flex' }}>
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