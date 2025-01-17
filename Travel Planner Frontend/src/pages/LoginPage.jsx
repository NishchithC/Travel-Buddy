import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect user if already authenticated
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      navigate(storedRole === 'ADMIN' ? '/admin-dashboard' : '/profile');
    }
  }, [navigate]);

  // Handle form login (manual login)
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
      const user = response.data;

      // Save user authentication details to local storage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('role', user.role);
      onLogin(user.role);

      // Navigate based on the user role
      if (user.role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = async (response) => {
    try {
      // Send Google token to backend for validation
      const token = response.credential;
      const res = await axios.post('http://localhost:8080/api/users/google-login', { token });

      // Assuming backend sends user data (including role)
      const user = res.data;
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('role', user.role);
      onLogin(user.role);

      // Navigate based on the role
      if (user.role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Google login error');
    alert('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="850642234293-jf26k9sjvernuifurmj5a3m1g5adanit.apps.googleusercontent.com">
      <div
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#00796b',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Login
          </button>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>OR</div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
