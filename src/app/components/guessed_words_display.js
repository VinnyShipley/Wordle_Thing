import React from 'react';

const GuessedWordsDisplay = ({ serverResponse }) => {
  const { guess, isCorrect, correctWord } = serverResponse;

  return (
    <div>
      <p>Guess: {guess.toString()}</p>
      <p>Is Correct: {isCorrect.toString()}</p>
      <p>Correct Word: {correctWord}</p>
    </div>
  );
};

export default GuessedWordsDisplay;