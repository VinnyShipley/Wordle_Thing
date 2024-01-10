// 'use client'
import React, { useState, useEffect } from 'react';

const GuessedWordsDisplay = () => {
  const [guessedWords, setGuessedWords] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  const handleGuessSubmit = () => {
    // Submit the guess to the server
    fetch('/api/guess-word', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guessedWord: currentGuess }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the guessed words state with the updated list
        setGuessedWords(data.guessedWords);
        setCurrentGuess(''); // Clear the input field after submitting
      })
      .catch((error) => {
        console.error('Error submitting guess:', error);
      });
  };

  useEffect(() => {
    // Fetch guessed words from the server on component mount
    fetch('/api/guessed-words')
      .then((response) => response.json())
      .then((data) => {
        // Update the guessed words state
        setGuessedWords(data.guessedWords);
      })
      .catch((error) => {
        console.error('Error fetching guessed words:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
      />
      <button onClick={handleGuessSubmit}>Submit Guess</button>

      {guessedWords.map((word, index) => (
        <div key={index} className="flex mb-2">
          {word.split('').map((letter, letterIndex) => (
            <div key={letterIndex} className="m-2 p-2 bg-gray-800 text-white rounded border">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuessedWordsDisplay;