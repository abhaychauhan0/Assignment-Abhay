import React from 'react';
import { FaBox, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';
import './SummaryCards.css';

const SummaryCards = () => {
  
  const previousValues = {
    totalOrders: 72,
    totalDelivered: 68,
    totalCancelled: 4,
    totalRevenue: 11600,
  };


  const currentValues = {
    totalOrders: 75,
    totalDelivered: 70,
    totalCancelled: 5,
    totalRevenue: 12000,
  };


  const calculatePercentageChange = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const orderChange = calculatePercentageChange(currentValues.totalOrders, previousValues.totalOrders);
  const deliveryChange = calculatePercentageChange(currentValues.totalDelivered, previousValues.totalDelivered);
  const cancelledChange = calculatePercentageChange(currentValues.totalCancelled, previousValues.totalCancelled);
  const revenueChange = calculatePercentageChange(currentValues.totalRevenue, previousValues.totalRevenue);

  return (
    <div className="summary-cards">
      <div className="summary-left">
        <div className="card">
          <div className="card-icon"><FaBox /></div>
          <div className="card-title">Total Orders</div>
          <div className="card-value">{currentValues.totalOrders}</div>
          <div className="trend-info-left">
            {orderChange > 0 ? (
              <><FaArrowUp className="trend-icon up" /> {orderChange.toFixed(2)}%</>
            ) : (
              <><FaArrowDown className="trend-icon down" /> {Math.abs(orderChange).toFixed(2)}%</>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-icon"><FaTruck /></div>
          <div className="card-title">Total Delivered</div>
          <div className="card-value">{currentValues.totalDelivered}</div>
          <div className="trend-info-left">
            {deliveryChange > 0 ? (
              <><FaArrowUp className="trend-icon up" /> {deliveryChange.toFixed(2)}%</>
            ) : (
              <><FaArrowDown className="trend-icon down" /> {Math.abs(deliveryChange).toFixed(2)}%</>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-icon"><FaBan /></div>
          <div className="card-title">Total Cancelled</div>
          <div className="card-value">{currentValues.totalCancelled}</div>
          <div className="trend-info-left">
            {cancelledChange > 0 ? (
              <><FaArrowUp className="trend-icon up" /> {cancelledChange.toFixed(2)}%</>
            ) : (
              <><FaArrowDown className="trend-icon down" /> {Math.abs(cancelledChange).toFixed(2)}%</>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-icon"><FaDollarSign /></div>
          <div className="card-title">Total Revenue</div>
          <div className="card-value">${currentValues.totalRevenue}</div>
          <div className="trend-info-left">
            {revenueChange > 0 ? (
              <><FaArrowUp className="trend-icon up" /> {revenueChange.toFixed(2)}%</>
            ) : (
              <><FaArrowDown className="trend-icon down" /> {Math.abs(revenueChange).toFixed(2)}%</>
            )}
          </div>
        </div>
      </div>
      <div className="summary-right">
        <div className="card">
          <div className="card-icon"><FaChartLine /></div>
          <div className="card-title">Net Profit</div>
          <div className="card-value">$6759.25</div>
          <div className="trend-info-right">
            <FaArrowUp className="trend-icon up" /> 3.9%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
