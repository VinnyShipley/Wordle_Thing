'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard.js';
import WordGuess from './components/word_guess.js';

const Home = () => {
  const [fadedLetters, setFadedLetters] = React.useState([]);

  const handleWordGuess = (word) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...word.split('')]);
    // Additional logic for handling the word guess
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <main className="text-center mb-8">
        {/* Your game content here */}
      </main>

      {/* On-screen keyboard */}
      <OnScreenKeyboard fadedLetters={fadedLetters} />

      {/* Word guess component */}
      <WordGuess onGuess={handleWordGuess} />
    </div>
  );
};

export default Home;
