'use client'
// src/components/DisplayedAnswers.js
import React from 'react';
import GuessedWordsDisplay from './guessed_words_display.js';

const DisplayedAnswers = ({ submittedWords }) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Submitted Words:</h2>
      {submittedWords.map((word, index) => (
        <GuessedWordsDisplay key={index} word={word} />
      ))}
    </div>
  );
};

export default DisplayedAnswers;