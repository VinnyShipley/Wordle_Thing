'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard.js';
import WordGuess from './components/word_guess.js';
import GuessedWordsDisplay from './components/guessed_words_display.js';

const Home = () => {
  const [fadedLetters, setFadedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

  const handleWordGuess = (word) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...word.split('')]);
    setGuessedWords((prevGuessedWords) => [...prevGuessedWords, word]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <main className="text-center mb-8">
      
      </main>
      <OnScreenKeyboard fadedLetters={fadedLetters} />
      <WordGuess onGuess={handleWordGuess} guessedWords={guessedWords} setGuessedWords={setGuessedWords} />
    </div>
  );
};

export default Home;
