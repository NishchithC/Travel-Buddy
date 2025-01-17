const express = require('express');
const router = express.Router();

// Payment Route
router.post('/payment', (req, res) => {
  const paymentData = req.body;

  // Simulate payment processing
  console.log('Processing payment:', paymentData);

  // Dummy response for success
  res.status(200).json({ message: 'Payment processed successfully!' });
});

module.exports = router;
