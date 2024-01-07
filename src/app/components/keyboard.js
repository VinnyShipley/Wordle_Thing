'use client';
import React, { useState, useEffect } from 'react';

const OnScreenKeyboard = ({ onKeyPress, fadedLetters }) => {
  const qwertyRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    setPressedKeys([]); // Reset pressed keys when faded letters change
  }, [fadedLetters]);

  const handleKeyPress = (key) => {
    if (pressedKeys.includes(key)) {
      setPressedKeys((prevPressedKeys) => prevPressedKeys.filter((pressedKey) => pressedKey !== key));
    } else {
      setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
      onKeyPress && onKeyPress(key);
    }
  };

  return (
    <div className="flex flex-col mt-auto p-4 bg-gray-800 text-white">
      {qwertyRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((key) => (
            <div
              key={key}
              className={`m-2 p-2 bg-gray-800 text-white rounded border transition-opacity duration-500 ease-in-out ${
                pressedKeys.includes(key) || fadedLetters.includes(key) ? 'opacity-50' : 'opacity-100'
              }`}
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OnScreenKeyboard;