import React from 'react'
import './about.css'
import me from './WhatsApp Image 2024-02-16 at 16.23.47_53d92100.jpg'
import BubbleAnimation from './bubble'

const About = () => {
  return (
    <div className='about'>
     
     <header> <h1 className='heading'>About Me</h1></header>
     <div className="bubble-container">
     <div className="aboutcontent">
      <div className="text">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vitae sunt deserunt quae illum suscipit voluptas, iusto officia nisi voluptatem dignissimos, explicabo adipisci, placeat voluptatum nulla qui praesentium odit? Minima.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vitae sunt deserunt quae illum suscipit voluptas, iusto officia nisi voluptatem dignissimos, explicabo adipisci, placeat voluptatum nulla qui praesentium odit? Minima.</p>
</div>
<img src={me} alt="Profile" className="photo"/></div>

      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
    </div>

    </div>
  )
}

export default About
