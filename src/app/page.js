'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard.js';
import WordGuess from './components/word_guess.js';
import GuessedWordsDisplay from './components/guessed_words_display.js';

const Home = () => {
  const [fadedLetters, setFadedLetters] = React.useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

  const handleWordGuess = (word) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...word.split('')]);
    setGuessedWords((prevGuessedWords) => {
      const newGuessedWords = [...prevGuessedWords, word];
      console.log('Guessed Words:', newGuessedWords); // Log the updated guessed words
      return newGuessedWords;
    });
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <main className="text-center mb-8">
        {/* Display guessed words */}
        <GuessedWordsDisplay guessedWords={guessedWords} />
      </main>

      {/* On-screen keyboard */}
      <OnScreenKeyboard fadedLetters={fadedLetters} />

      {/* Word guess component */}
      <WordGuess onGuess={handleWordGuess} />
    </div>
  );
};

export default Home;