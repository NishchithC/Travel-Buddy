import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Simulating fetching admin data
    const fetchAdminData = async () => {
      // Replace this with an actual API call to fetch admin data
      const data = {
        name: 'John Doe',
        email: 'admin@example.com',
        totalRevenue: 50000,
        totalUsers: 1500,
        activeBookings: 200,
        systemStatus: 'Healthy',
      };
      setAdminData(data);
    };

    fetchAdminData();
  }, []);
  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <>
      {/* <NavBar /> */}
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1 style={{ textAlign: 'center', color: '#00796b' }}>Admin Profile</h1>

        {adminData ? (
          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: '#00796b' }}>Admin Overview</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <p><strong>Name:</strong> {adminData.name}</p>
                <p><strong>Email:</strong> {adminData.email}</p>
              </div>
              <div>
                <p><strong>Status:</strong> {adminData.systemStatus}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
              <div style={{ textAlign: 'center', backgroundColor: '#e0f7fa', padding: '15px', borderRadius: '8px', width: '30%' }}>
                <h3 style={{ color: '#00796b' }}>Total Revenue</h3>
                <p>${adminData.totalRevenue}</p>
              </div>
              <div style={{ textAlign: 'center', backgroundColor: '#e0f7fa', padding: '15px', borderRadius: '8px', width: '30%' }}>
                <h3 style={{ color: '#00796b' }}>Total Users</h3>
                <p>{adminData.totalUsers}</p>
              </div>
              <div style={{ textAlign: 'center', backgroundColor: '#e0f7fa', padding: '15px', borderRadius: '8px', width: '30%' }}>
                <h3 style={{ color: '#00796b' }}>Active Bookings</h3>
                <p>{adminData.activeBookings}</p>
              </div>
            </div>

            {/* System Health Section */}
            <div>
              <h3 style={{ color: '#00796b' }}>System Health</h3>
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <p><strong>System Status:</strong> {adminData.systemStatus}</p>
                <p><strong>Uptime:</strong> 99.9%</p>
                <p><strong>Response Time:</strong> 200ms</p>
                <p><strong>Error Rate:</strong> 0.2%</p>
                <p><strong>Connections:</strong> 150</p>
                <button
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
        </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default AdminProfile;
