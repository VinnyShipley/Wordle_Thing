const GuessedWordsDisplay = ({ serverResponse }) => {
  if (!serverResponse) {
    return null; // or handle the case when serverResponse is undefined or null
  }

  const { guess, isCorrect, correctWord } = serverResponse;

  return (
    <div>
      <p>Your guess: {guess}</p>
      <p>Is correct: {isCorrect.toString()}</p>
      {isCorrect ? (
        <p>Correct word: {correctWord}</p>
      ) : (
        <p>Incorrect guess! The correct word is: {correctWord}</p>
      )}
    </div>
  );
};

export default GuessedWordsDisplay;
