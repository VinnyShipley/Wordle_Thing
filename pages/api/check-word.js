export default function handler(req, res) {
  if (req.method === 'POST') {
    const { guess } = req.body;

    // Validate guess as needed

    // Set the correct word globally (for demonstration purposes)
    global.correctWord = 'EXAMPLE';

    // Check if the guessed word is correct
    const isCorrect = guess.toUpperCase() === global.correctWord.toUpperCase();

    // Include the correct word in the response
    res.status(200).json({ guess, isCorrect, correctWord: global.correctWord });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}