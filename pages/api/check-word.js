export default function handler(req, res) {
  if (req.method === 'POST') {
    const { guess } = req.body;

    // Validate guess as needed

    // Retrieve the correct word (for demonstration purposes, using a global variable)
    const correctWord = global.correctWord || 'EXAMPLE';

    // Check if the guessed word is correct
    const isCorrect = guess.toUpperCase() === correctWord.toUpperCase();

    res.status(200).json({ isCorrect });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}