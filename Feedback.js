import React from 'react';
import './Feedback.css';
import p11 from '../components/assets/p11.webp';
import p12 from '../components/assets/p12.webp';
import p3 from '../components/assets/p3.webp';

const Feedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service.', profilePic: p11 },
    { name: 'Dianne Russell', rating: 4, comment: 'Enjoyed the Eggs Benedict served on homemade focaccia.', profilePic: p12 },
    { name: 'John Doe', rating: 3, comment: 'Good service, but the food could be better.', profilePic: p3 }
  ];

  const renderStars = (rating) => {
    const filledStars = '⭐'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return (
      <span>
        {filledStars}
        {emptyStars}
      </span>
    );
  };

  return (
    <div className="feedback">
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-item">
          <div className="feedback-header">
            <div className="profile-container">
              <img src={feedback.profilePic} alt={`${feedback.name}'s profile`} className="profile-pic" />
              <span>{feedback.name}</span>
            </div>
            <span className="stars">{renderStars(feedback.rating)}</span>
          </div>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
