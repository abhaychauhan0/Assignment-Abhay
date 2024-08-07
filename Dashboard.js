import React from 'react';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import Goals from './Goals';
import SummaryCards from './SummaryCards';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <SummaryCards />
      <div className="main-content">
        <ActivityChart />
        <Goals />
      </div>
      <div className="orders-feedback">
        <RecentOrders />
        <Feedback />
      </div>
    </div>
  );
};

export default Dashboard;
