// Card.js
import React from 'react';
import './card1.css';

const Card1 = ({ imageSrc, heading, subHeading, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Avatar" className="card-image" />
      <h1 className="card-heading">{heading}</h1>
      <hr className="card-divider" />
      <h2 className="card-subheading">{subHeading}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card1;
