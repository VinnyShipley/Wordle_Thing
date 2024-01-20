'use client'
import React, { useState } from 'react';
import OnScreenKeyboard from './components/keyboard.js';
import WordGuess from './components/word_guess.js';
import GuessedWordsDisplay from './components/guessed_words_display.js';

const Home = () => {
  const [fadedLetters, setFadedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const [colorListPasser, setColorListPasser] = useState([]);

  const handleWordGuess = (guessedWord, colorList) => {
    setFadedLetters((prevFadedLetters) => [...prevFadedLetters, ...guessedWord.split('')]);
  setGuessedWords([...guessedWords, guessedWord]);
  setColorListPasser([...colorListPasser, colorList]);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <main className="text-center mb-8">
      <GuessedWordsDisplay guessedWords={guessedWords} colorListPasser={colorListPasser}/>
      </main>
      <OnScreenKeyboard fadedLetters={fadedLetters} />
      <WordGuess onGuess={handleWordGuess} guessedWords={guessedWords} setGuessedWords={setGuessedWords} />
    </div>
  );
};

export default Home;
