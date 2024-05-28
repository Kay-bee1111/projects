import React from 'react'
import me from './images/krati2.png'
import './intro.css'


const Intro = () => {
  return (
    <div className="h-screen w-screen bg-black z-[-1]">
    <section id="intro">
      
      <div className="content">
        <span className="hello"></span>   
        
        <span className="introtext">Hello, <span className="introname">I'm Krati</span>
        </span>  
        <p className="intropara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eos ratione ullam asperiores adipisci eum,</p>
        <a className='buton' href="https://drive.google.com/file/d/11hLsVANOW2nE9nxDE9Km3CK78riV90-q/view?usp=sharing"><button className='btn'>Resume</button></a>
         </div>

      {/*<img src={me} alt="Profile" className="photo"/>*/}
    </section></div>
  )
}

export default Intro;