import React from 'react';

const GuessedWordsDisplay = ({ guessedWords, colorListPasser }) => {
  console.log(colorListPasser); // Log the entire colorListPasser array for debugging

  return (
    <div>
      {/* Display the guessed words as needed */}
      {guessedWords.map((word, wordIndex) => (
        <div key={wordIndex} className="flex">
          {word.split('').map((letter, letterIndex) => (
            <div
              key={letterIndex}
              className={`m-2 p-2 rounded border flex items-center justify-center ${
                colorListPasser[wordIndex] && colorListPasser[wordIndex][letterIndex]
                  ? `bg-${colorListPasser[wordIndex][letterIndex]} text-black`
                  : 'bg-gray-800 text-white'
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
