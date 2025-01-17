import React, { useState } from 'react';
import './FlightBookingPage.css';

const FlightBookingPage = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('Economy');
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setFlights([]);

    const clientId = process.env.REACT_APP_AMADEUS_API_KEY;
    const clientSecret = process.env.REACT_APP_AMADEUS_API_SECRET;
    const accessToken = process.env.REACT_APP_AMADEUS_ACCESS_TOKEN;

    try {
      const tokenResponse = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'grant_type': 'client_credentials',
          'client_id': clientId,
          'client_secret': clientSecret,
        }),
      });

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${passengers}&travelClass=${flightClass}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error('Failed to fetch flights');
      }

      const data = await response.json();
      setFlights(data.data || []);
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/254381.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Find Your Perfect Flight</h1>

      <div className="search-form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '5px' }}>
        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>From</label>
          <input
            type="text"
            placeholder="Enter departure city or airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>Destination</label>
          <input
            type="text"
            placeholder="Enter destination city or airport"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>Passengers</label>
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div className="input-group" style={{ marginBottom: '15px' }}>
          <label>Class</label>
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>

        <button onClick={handleSearch} className="search-btn" style={{ width: '100%', padding: '10px', backgroundColor: '#00796b', color: '#fff', border: 'none', borderRadius: '5px' }}>Search Flights</button>
      </div>

      {error && <div className="error" style={{ color: 'red', marginTop: '20px' }}>{error}</div>}
      
      <div className="flight-results" style={{ marginTop: '20px' }}>
        {flights.map((flight, index) => (
          <div key={index} className="flight-item" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <p>Flight from {flight.origin} to {flight.destination}</p>
            <p>Departure: {flight.departureDate}</p>
            <p>Return: {flight.returnDate}</p>
            <p>Class: {flightClass}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightBookingPage;
