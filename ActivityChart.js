import React from 'react';
import './ActivityChart.css'; 

const ActivityChart = () => {
 
  const data = [50, 70, 30, 80, 40, 90, 60, 20, 100, 50, 70, 40]; 
  const labels = [ 0,5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]; 

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h2>Activity</h2>
        <div className="header-right">
          <p>Weekly</p>
          <span className="arrow-icon">▼</span>
        </div>
      </div>
      <div className="chart-body">
        <div className="y-axis-labels">
          <span>15k</span>
          <span>10k</span>
          <span>5k</span>
          <span>0</span>
        </div>
        <div className="chart-bars">
          {data.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value}%` }} 
            />
          ))}
        </div>
      </div>
      <div className="chart-x-axis">
        {labels.map((label, index) => (
          <span key={index} className="x-axis-label">{label}</span>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
