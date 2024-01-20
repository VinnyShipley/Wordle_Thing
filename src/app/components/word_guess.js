'use client';
import React, { useState } from 'react';

const WordGuess = ({ onGuess }) => {
	const [guess, setGuess] = useState('');
	const [guessedWords, setGuessedWords] = useState([]);
	const [colorListPasser, setColorListPasser] = useState([]);

	const handleGuessChange = (event) => {
		setGuess(event.target.value.toUpperCase()); // Convert to uppercase for consistency
	};

	function getColorCode(char, correctChar, correctList, colorList, index) {
		if (char !== correctChar && !correctList.includes(char)) {
			console.log(char);
			colorListPasser.push('red');
		}
		if (correctList.includes(char) && char !== correctChar) {
			console.log(char);
			colorListPasser.push('yellow');
		}
		if (char === correctChar) {
			console.log(char);
			colorListPasser.push('green');
		}

		return colorList;
	}
	

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
				const { isCorrect, correctWord } = serverResponse;

				// Split the guessed word into individual letters
				const guessedLetters = guess.split('');
				const correctLetters = correctWord.toUpperCase().split('');

				if (guessedLetters.length !== correctLetters.length) {
					const correctLength = correctLetters.length;
					alert('Guess needs to be ' + correctLength + ' letters long.');
				}

				if (guessedLetters.length === correctLetters.length) {
					if (isCorrect) {
						// Correct word
						guessedWords.push(serverResponse);
						onGuess && onGuess(guess);
						alert('Correct! The word is ' + correctWord.toUpperCase());
					} else {
						// Incorrect Word
						const colorListPasserTemp = [];
						for (let i = 0; i < guessedLetters.length; i++) {
							getColorCode(
								guessedLetters[i],
								correctLetters[i],
								correctLetters,
								colorListPasserTemp,
								i
							);
						}
						setColorListPasser(colorListPasserTemp);
						
						guessedWords.push(serverResponse.guess);
						onGuess && onGuess(guess);
					}
				}

				setGuess('');
			}
		} catch (error) {
			// Handle other errors
			console.error('Error:', error);
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div>
			<form onSubmit={handleGuessSubmit} className='mt-4 text-center'>
				<label className='text-3xl block text-black mb-2'>Your Guess:</label>
				<div className='flex justify-center'>
					<input
						type='text'
						value={guess}
						onChange={handleGuessChange}
						className='p-2 mr-2 bg-gray-800 text-white rounded border'
					/>
					<button type='submit' className='p-2 bg-blue-500 text-white rounded'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default WordGuess;
