import React, { useState } from 'react';
import './edu.css';
import photo1 from './1.png';
import photo2 from './2.png';
import Details from './details/Details';

const Edu = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className='edu'>
      <header className='header'>
        <h1 className='head'>Educational Qualifications</h1><button className='toggle-button' onClick={handleToggleClick}>
          {showDetails ? 'Go Back' : 'Show Score'}
        </button>
        
      </header>
      {showDetails ? (
        <Details />
      ) : (
        <div className='grid'>
          <div className="block">
            <img src={photo1} className="image" alt="Secondary (X)" />
            <br/>
            <hr className='rule'/>
            <h3>Secondary (X)</h3>
            <h4>Delhi Public School, Bulandshahr</h4>
            <h5>CBSE Board</h5>
            <h5>2019</h5>
          </div>
          <div className="block">
            <img src={photo1} className="image" alt="Senior Secondary (XII)" />
            <br/>
            <hr className='rule'/>
            <h3>Senior Secondary (XII)</h3>
            <h4>Delhi Public School, Bulandshahr</h4>
            <h5>CBSE Board</h5>
            <h5>2021</h5>
          </div>
          <div className="block">
            <img src={photo2} className="image" alt="Bachelor of Technology (CSE)" />
            <br/>
            <hr className='rule'/>
            <h3>Bachelor of Technology</h3>
            <h4>IIIT Bhagalpur</h4>
            <h5>Computer Science & Engineering</h5>
            <h5>2022-26</h5>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Edu;
