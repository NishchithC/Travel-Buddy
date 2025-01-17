import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/1318106.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        Plan Your Next Adventure?
      </h1>
      <div className="plan-trip" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter destination"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="date"
          placeholder="dd/mm/yy"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Enter Budget"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Plan Your Trip
        </button>
      </div>
      <div className="options" style={{ marginBottom: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Create Itinerary
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
          onClick={() => navigate('/recommendations')}  // This now navigates to RecommendationsPage
        >
          Recommendations
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
          onClick={() => navigate('/flights')}
        >
          Book Flights
        </button>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={() => navigate('/packages')}
        >
          View Holiday Packages
        </button>
      </div>
      <div className="upcoming-trips">
        <h2 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
          Upcoming Trips
        </h2>
        <div
          className="trip"
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            marginBottom: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Trip 1
        </div>
        <div
          className="trip"
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Trip 2
        </div>
      </div>
    </div>
  );
};

export default HomePage;
