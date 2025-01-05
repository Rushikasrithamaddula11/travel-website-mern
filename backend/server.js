const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Travel Blog Backend!');
});

// Booking Route
app.post('/book', (req, res) => {
  const { destination, numPersons, persons, additionalDetails } = req.body;

  if (!destination || !numPersons || !persons || persons.length === 0) {
    return res.status(400).json({ error: 'Missing required booking details.' });
  }

  // Simulate a payment process
  const paymentAccount = process.env.PAYMENT_ACCOUNT || 'default@account';
  res.status(200).json({
    message: `Booking confirmed for ${destination}. Payment will be credited to ${paymentAccount}.`,
    bookingDetails: { destination, numPersons, persons, additionalDetails },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
