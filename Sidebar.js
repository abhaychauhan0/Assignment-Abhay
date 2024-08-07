import React from 'react';
import './Sidebar.css';
import { FaTh, FaHome, FaBox, FaChartLine, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon apps-icon"><FaTh /></div>
      <div className="sidebar-icon"><FaHome /></div>
      <div className="sidebar-icon"><FaBox /></div>
      <div className="sidebar-icon"><FaChartLine /></div>
      <div className="sidebar-icon"><FaCog /></div>
    </div>
  );
};

export default Sidebar;
