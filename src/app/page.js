'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard';
import WordGuess from './components/word_guess';
import GuessedWordsDisplay from './components/guessed_words_display';

const Home = () => {
  const [fadedLetters, setFadedLetters] = React.useState([]);
  const [serverResponse, setServerResponse] = useState(null);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0); // Reducer that doesn't change state

  const handleWordGuess = async (word) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...word.split('')]);

    try {
      const response = await fetch('/api/check-word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess: word }),
      });

      const newServerResponse = await response.json();
      setServerResponse(newServerResponse);
      setGuessedWords((prevGuessedWords) => [...prevGuessedWords, word]);

      if (serverResponse.isCorrect) {
        // Update guessedWords state if the guess is correct
        setGuessedWords((prevGuessedWords) => [...prevGuessedWords, serverResponse.guess]);
        forceUpdate(); // Manually trigger a re-render
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <main className="text-center mb-8">
      {serverResponse && <GuessedWordsDisplay serverResponse={serverResponse} />}

      </main>
      <OnScreenKeyboard fadedLetters={fadedLetters} />
      <WordGuess onGuess={handleWordGuess} />
    </div>
  );
};

export default Home;


