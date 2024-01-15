import React from 'react';

const FeedbackDisplay = ({ serverResponse }) => {
  const { guess, isCorrect, correctWord } = serverResponse;

  return (
    <div>
      <p>Guess: {guess}</p>
      <p>Is Correct: {isCorrect.toString()}</p>
      <p>Correct Word: {correctWord}</p>
    </div>
  );
};

export default FeedbackDisplay;
