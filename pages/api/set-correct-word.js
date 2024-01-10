export default function handler(req, res) {
  if (req.method === 'POST') {
    const { correctWord } = req.body;

    // Validate correctWord as needed

    // Update the correct word (for demonstration purposes, using a global variable)
    global.correctWord = correctWord;

    res.status(200).json({ message: 'Correct word set successfully.' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}