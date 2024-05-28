import React, { useState } from 'react';
import './details.css';
import photo1 from '../1.png'
import photo2 from '../2.png'


  
const Details = () => {

  return (
    <div className='edu1'>
       
        <div className='grid'>
      <div className="block"  >
     <img src={photo1} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Secondary (X)</h3>
     <h4>Obtained 98.6% 
</h4>
     <h5>CBSE Board</h5>
     <h5>2019</h5>
      </div>
      <div className="block">
     <img src={photo1} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Senior Secondary (XII)</h3>
     <h4>Obtained 99.8% 
</h4>
     <h5>CBSE Board</h5>
     <h5>2021</h5>
      </div>
      <div className="block">
     <img src={photo2} className="image"/>
     <br/>
     <hr className='rule'/>
     <h3>Bachelor of Technology </h3>
     <h4>Current CGPA 8.75</h4>
     <h5>Computer Science & Engineering</h5>
     <h5>2022-16</h5>
      </div>
     
      </div>
        </div>
  )
}

export default Details