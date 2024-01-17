// GuessedWordsDisplay.js

import React from 'react';

const GuessedWordsDisplay = ({ guessedWords }) => {
  return (
    <div>
      {/* Display the guessed words as needed */}
      {guessedWords.map((word, index) => (
        <div key={index} className="flex">
          {word.split('').map((letter, letterIndex) => (
            <div key={letterIndex} className="m-2 p-2 bg-gray-800 text-white rounded border flex items-center justify-center">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuessedWordsDisplay;