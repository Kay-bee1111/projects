import React from 'react';
import './Card.css';

const Card = ({ progress, label }) => {
  const strokeDashoffset = 220 - (220 * progress) / 100;

  return (
    <div className="card">
      <div className="progress-circle">
        <svg width="75" height="75" viewBox="0 0 75 75">
          <circle
            className="bg"
            cx="37.5"
            cy="37.5"
            r="35"
          />
          <circle
            className="progress"
            cx="37.5"
            cy="37.5"
            r="35"
            style={{ strokeDashoffset }}
          />
          <text x="37.5" y="37.5" textAnchor="middle" dy=".3em">
            {`${progress}%`}
          </text>
        </svg>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Card;
