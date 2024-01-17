import React from 'react';

const GuessedWordsDisplay = ({ serverResponse }) => {
  if (!serverResponse) {
    return null;
  }

  const { guess } = serverResponse;

  return (
    <div>
      <div>{guess}</div>
    </div>
  );
};

export default GuessedWordsDisplay;
