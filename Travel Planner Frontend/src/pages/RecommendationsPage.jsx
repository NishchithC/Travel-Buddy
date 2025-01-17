import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate fetching data for recommendations
    const fetchRecommendations = async () => {
      // Replace with actual API call to fetch user recommendations
      const data = [
        { id: 1, title: 'Trip to Paris', description: 'Discover the beauty of Paris with a guided tour.' },
        { id: 2, title: 'Explore the beaches of Bali', description: 'Relax and unwind on the beautiful beaches of Bali.' },
        { id: 3, title: 'Visit New York City', description: 'A complete guide to visiting the iconic landmarks of NYC.' },
        { id: 4, title: 'Mountain Trekking in Nepal', description: 'Experience the adventure of a lifetime in the mountains of Nepal.' },
      ];
      setRecommendations(data);
    };

    fetchRecommendations();
  }, []);

  return (
    <>
      <NavBar />
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1 style={{ textAlign: 'center', color: '#00796b' }}>Personalized Recommendations</h1>
        
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#00796b' }}>Recommended Trips for You</h2>
          
          {recommendations.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {recommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h3 style={{ color: '#00796b' }}>{recommendation.title}</h3>
                  <p>{recommendation.description}</p>
                  <button
                    style={{
                      backgroundColor: '#00796b',
                      color: '#fff',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginTop: '10px',
                    }}
                    onClick={() => alert(`Booking the trip: ${recommendation.title}`)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading recommendations...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RecommendationsPage;
