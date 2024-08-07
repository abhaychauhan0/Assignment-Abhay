import React from 'react';
import './RecentOrders.css';
import p1 from '../components/assets/p1.webp';
import p2 from '../components/assets/p2.webp';
import p3 from '../components/assets/p3.webp';
import p4 from '../components/assets/p4.webp';
import p5 from '../components/assets/p5.webp';
import p6 from '../components/assets/p6.webp';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', profilePic: p1 },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Pending', profilePic: p2 },
    { customer: 'John Doe', orderNo: '45678901', amount: '$210.50', status: 'Delivered', profilePic: p3 },
    { customer: 'Emily Smith', orderNo: '78901234', amount: '$89.75', status: 'Pending', profilePic: p4 },
    { customer: 'Michael Brown', orderNo: '23456789', amount: '$160.00', status: 'Shipped', profilePic: p5 },
    { customer: 'Sarah Johnson', orderNo: '34567890', amount: '$275.00', status: 'Delivered', profilePic: p6 },
  ];

  const getStatusClass = (status) => {
    switch(status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Pending':
        return 'status-pending';
      case 'Shipped':
        return 'status-shipped';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="profile-container">
                <img src={order.profilePic} alt={`${order.customer}'s profile`} className="profile-pic"/>
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className={getStatusClass(order.status)}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
