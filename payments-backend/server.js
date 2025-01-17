const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/payment', (req, res) => {
  const paymentData = req.body;

  // Simulate payment processing
  console.log('Processing payment:', paymentData);

  // Dummy response for success
  res.status(200).json({ message: 'Payment processed successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
