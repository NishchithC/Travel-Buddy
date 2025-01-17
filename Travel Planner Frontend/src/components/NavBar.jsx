import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        backgroundColor: '#00796b',
        color: '#fff',
      }}
    >
      <div className="logo">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          TrAvEl BuDdY
        </Link>
      </div>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        {!isAuthenticated && (
          <li>
            <Link
              to="/login"
              style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}
            >
              Login/Sign Up
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link
                to="/profile"
                style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/mytrips"
                style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}
              >
                My Trips
              </Link>
            </li>
            <li>
              <Link
                to="/budgetplanner"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  margin: '0 10px',
                }}
              >
                Budget Planner
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}
              >
                About
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
