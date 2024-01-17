// GuessedWordsDisplay.js

import React from 'react';

const GuessedWordsDisplay = ({ guessedWords }) => {
  console.log('Guessed Words:', guessedWords);

  return (
    <div>
      {/* Display the guessed words as needed */}
      {guessedWords.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
};

export default GuessedWordsDisplay;
