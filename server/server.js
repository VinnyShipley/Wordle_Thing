const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

let guessedWords = [];

app.post('/api/guess-word', (req, res) => {
  const { guessedWord } = req.body;

  // Add the guessed word to the list
  guessedWords.push(guessedWord);

  // Send back the updated guessed words list
  res.json({ guessedWords });
});

app.get('/api/guessed-words', (req, res) => {
  // Send the current guessed words list as JSON
  res.json({ guessedWords });
});