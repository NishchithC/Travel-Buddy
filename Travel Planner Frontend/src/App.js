import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import MyTrips from './pages/MyTrips';
import Help from './pages/HelpPage';
import About from './pages/AboutPage';
import BudgetPlanner from './pages/BudgetPlanner';
import PaymentsPage from './components/PaymentsPage';
import FlightsBookingPage from './components/FlightsBookingPage';
import HolidayPackages from './HolidayPackages/App';
import RecommendationsPage from './pages/RecommendationsPage'; // Import RecommendationsPage
import NavBar from './components/NavBar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  const navigate = useNavigate();

  const handleLogin = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('role', userRole);
    navigate(userRole === 'ADMIN' ? '/admin-dashboard' : '/profile');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('role');
    }
  }, [isAuthenticated]);

  return (
    <>
      {/* Conditionally render NavBar */}
      {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && (
        <NavBar isAuthenticated={isAuthenticated} role={role} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              role === 'ADMIN' ? <AdminProfile /> : <UserProfile />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            isAuthenticated && role === 'ADMIN' ? <AdminProfile /> : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/mytrips" element={isAuthenticated ? <MyTrips /> : <Login onLogin={handleLogin} />} />
        <Route path="/budgetplanner" element={isAuthenticated ? <BudgetPlanner /> : <Login onLogin={handleLogin} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/payments" element={isAuthenticated ? <PaymentsPage /> : <Login onLogin={handleLogin} />} />
        <Route path="/flights" element={<FlightsBookingPage />} />
        <Route path="/packages" element={<HolidayPackages />} />
        <Route path="/recommendations" element={<RecommendationsPage />} /> {/* New route for RecommendationsPage */}
      </Routes>
    </>
  );
};

export default App;
