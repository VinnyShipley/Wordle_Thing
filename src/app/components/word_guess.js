'use client'
// WordGuess.js

import React, { useState } from 'react';
import GuessedWordsDisplay from './guessed_words_display';

const WordGuess = ({ onGuess }) => {
  const [guess, setGuess] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  
  const handleGuessChange = (event) => {
    setGuess(event.target.value.toUpperCase()); // Convert to uppercase for consistency
  };

  const handleGuessSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to your server to check the guessed word
      const response = await fetch('/api/check-word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess }),
      });

      // Log the server response to the console
      const serverResponse = await response.json();

      if (response.ok) {
        const { isCorrect } = serverResponse;
        

        if (isCorrect) {
          // Correct word
          guessedWords.push(serverResponse.guess)
          onGuess && onGuess(guess);
          setGuess('');
        } else {
          // Incorrect word
          guessedWords.push(serverResponse.guess)
          setGuess('');
        }
      } else {
        // Handle server error
        alert('Server error. Please try again later.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleGuessSubmit} className="mt-4 text-center">
        <label className="text-3xl block text-black mb-2">Your Guess:</label>
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
      <GuessedWordsDisplay guessedWords={guessedWords} />
    </div>
  );
};

export default WordGuess;
