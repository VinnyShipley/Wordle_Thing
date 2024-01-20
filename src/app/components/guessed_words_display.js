import React from 'react';

const GuessedWordsDisplay = ({ guessedWords, colorListPasser }) => {
  return (
    <div>
      {/* Display the guessed words as needed */}
      {guessedWords.map((word, index) => (
        <div key={index} className="flex">
          {word.split('').map((letter, letterIndex) => (
            <div
              key={letterIndex}
              className={`m-2 p-2 rounded border flex items-center justify-center ${
                colorListPasser && colorListPasser[letterIndex] ? colorListPasser[letterIndex] : 'bg-gray-800 text-white'
              }`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuessedWordsDisplay;
