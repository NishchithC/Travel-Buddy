const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Amadeus API credentials from .env file
const AMADEUS_API_KEY = process.env.AMADEUS_API_KEY;
const AMADEUS_API_SECRET = process.env.AMADEUS_API_SECRET;

// Route to search for flights
app.post('/api/search-flights', async (req, res) => {
  const { destination, departureDate, returnDate, passengers, flightClass } = req.body;

  try {
    // Get access token from Amadeus API (OAuth 2.0)
    const tokenResponse = await axios.post(
      'https://api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: AMADEUS_API_KEY,
        client_secret: AMADEUS_API_SECRET
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    
    const accessToken = tokenResponse.data.access_token;

    // Make the flight search request to Amadeus API
    const flightsResponse = await axios.get(
      `https://api.amadeus.com/v2/shopping/flight-offers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          originLocationCode: 'NYC', // Example origin, change as needed
          destinationLocationCode: destination, // User input destination
          departureDate: departureDate, // User input departure date
          returnDate: returnDate, // User input return date (optional)
          adults: passengers, // User input number of passengers
          travelClass: flightClass, // User input flight class
          currencyCode: 'USD' // Currency code
        }
      }
    );

    res.json(flightsResponse.data);
  } catch (error) {
    console.error('Error fetching flight data from Amadeus:', error);
    res.status(500).json({ error: 'Error fetching flight data from Amadeus' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
