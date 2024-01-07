'use client'
import React, { useState } from 'react';

const WordGuess = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleGuessChange = (event) => {
    setGuess(event.target.value.toUpperCase()); // Convert to uppercase for consistency
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    onGuess && onGuess(guess);
    setGuess(''); // Clear the input after submitting the guess
  };

  return (
    <form onSubmit={handleGuessSubmit} className="mt-4 text-center">
      <label className="block text-black mb-2">Your Guess:</label>
      <div className="flex justify-center">
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          className="p-2 mr-2 bg-gray-800 text-white rounded border"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default WordGuess;