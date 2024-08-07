import React from 'react';
import { FaSearch, FaEnvelope, FaCog, FaBell } from 'react-icons/fa';
import './Header.css';
import p13 from '../components/assets/p13.webp'; 

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaSearch className="icon search-icon" />
      </div>
      <div className="profile-icons">
        <div className="icon-wrapper"><FaEnvelope className="icon" /></div>
        <div className="icon-wrapper"><FaCog className="icon" /></div>
        <div className="icon-wrapper">
          <FaBell className="icon bell-icon" />
          <span className="notification-dot"></span>
        </div>
        <div className="profile-wrapper">
          <img src={p13} alt="Profile" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
