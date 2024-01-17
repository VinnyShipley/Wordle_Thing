'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard.js';
import WordGuess from './components/word_guess.js';
import GuessedWordsDisplay from './components/guessed_words_display.js';

const Home = () => {
  const [fadedLetters, setFadedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

  const handleWordGuess = (guessedWord) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...guessedWord.split('')]);
    setGuessedWords([...guessedWords, guessedWord]);
    console.log(guessedWords)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <main className="text-center mb-8">
      <GuessedWordsDisplay guessedWords={guessedWords}/>
      </main>
      <OnScreenKeyboard fadedLetters={fadedLetters} />
      <WordGuess onGuess={handleWordGuess} guessedWords={guessedWords} setGuessedWords={setGuessedWords} />
    </div>
  );
};

export default Home;
