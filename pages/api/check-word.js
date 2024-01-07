export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Assuming you want to log 'hello' when the submit button is pressed
      console.log('hello');

      // You can send a response back to the client if needed
      res.status(200).json({ message: 'Word checked successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Method Not Allowed
    res.status(405).end();
  }
}