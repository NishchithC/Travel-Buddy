import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [travelBio, setTravelBio] = useState(null);
  const [recentTrips, setRecentTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace with actual API call to get the logged-in user's ID
    axios.get('http://localhost:8080/api/users/current')
      .then(response => {
        const userId = response.data.id;
        fetchUserProfile(userId);
        fetchTravelBio(userId);
        fetchRecentTrips(userId);
      })
      .catch(error => console.error('Error fetching current user ID:', error));
  }, []);

  const fetchUserProfile = (userId) => {
    axios.get(`http://localhost:8080/api/profiles/user/${userId}`)
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  };

  const fetchTravelBio = (userId) => {
    axios.get(`http://localhost:8080/api/travelbio/user/${userId}`)
      .then(response => setTravelBio(response.data))
      .catch(error => console.error('Error fetching travel bio:', error));
  };

  const fetchRecentTrips = (userId) => {
    axios.get(`http://localhost:8080/api/trips/user/${userId}`)
      .then(response => setRecentTrips(response.data))
      .catch(error => console.error('Error fetching recent trips:', error));
  };
  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
    navigate('/login');
  };

  if (!profile || !travelBio) return <div>Loading...</div>;

  return (
    <>
    {/* <NavBar /> */}
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa', padding: '20px' }}>
      {/* <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
        <h1 style={{ color: '#00796b' }}>Travel Websitename</h1>
        <nav>
          <button style={{ margin: '0 10px' }}>Profile</button>
          <button style={{ margin: '0 10px' }}>My Trips</button>
          <button style={{ margin: '0 10px' }}>Help</button>
          <button style={{ margin: '0 10px' }}>About</button>
        </nav>
      </header> */}
      <main style={{ backgroundColor: '#b2ebf2', padding: '20px', borderRadius: '10px' }}>
        <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <img src="path_to_placeholder_image" alt="User Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h2>{profile.name}</h2>
            <button>Edit</button>
            <button>Delete</button>
            <p>{profile.user.email}</p>
            <p>My Groups</p>
            <p>{profile.city}</p>
            <p>Name of group</p>
            <p>Name of group</p>
            <h3>Travel Bio</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3>Countries Visited</h3>
                <p>{travelBio.countriesVisited}</p>
              </div>
              <div>
                <h3>Trips Completed</h3>
                <p>{travelBio.tripsCompleted}</p>
              </div>
              <div>
                <h3>Miles Travelled</h3>
                <p>{travelBio.milesTravelled}</p>
              </div>
            </div>
            <h3>Recent Trips</h3>
            {recentTrips.map(trip => (
              <div key={trip.id}>
                <h4>{trip.city}</h4>
                <p>{trip.date}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>Settings</h2>
          <ul>
            <li>Notifications</li>
            <li>Privacy Settings</li>
            <li>Language & Region</li>
            <li> <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button></li>
          </ul>
        </section>
      </main>
    </div>
    </>
  );
};

export default UserProfile;
