import React from 'react';
import { FaChartLine, FaCheckCircle, FaLightbulb, FaBullseye } from 'react-icons/fa';
import './Goals.css';

const Goals = () => {
  return (
    <div className="goals">
      <h2>Goals</h2>
      <div className="goal-item">
        <div className="icon-wrapper"><FaChartLine className="icon" /></div>
        <span>Increase traffic by 20%</span>
      </div>
      <div className="goal-item">
        <div className="icon-wrapper"><FaCheckCircle className="icon" /></div>
        <span>Complete 100% of tasks</span>
      </div>
      <div className="goal-item">
        <div className="icon-wrapper"><FaLightbulb className="icon" /></div>
        <span>Generate 5 new ideas</span>
      </div>
      <div className="goal-item">
        <div className="icon-wrapper"><FaBullseye className="icon" /></div>
        <span>Hit quarterly targets</span>
      </div>
    </div>
  );
};

export default Goals;
