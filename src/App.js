import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import About from './aboutme/about';
import Intro from './intro/intro';
import Nav from './navbar/navbar';
import Skills from './skills/skills';
import Edu from './education/Edu';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
    <Intro/>
    <div className='nav'>

      
      <button className='sec' onClick={() => setActiveSection('intro')}>Home</button>
      <button className='sec' onClick={() => setActiveSection('about')}>About me</button>
      <button className='sec' onClick={() => setActiveSection('skills')}>My Skills</button>
      <button className='sec' onClick={() => setActiveSection('edu')}>Education</button></div>
      <TransitionGroup>
        {activeSection === 'intro' && (
          <CSSTransition key="intro" timeout={500} classNames="fade">
            <Intro />
          </CSSTransition>
        )}
        {activeSection === 'about' && (
          <CSSTransition key="about" timeout={500} classNames="fade">
            <About />
          </CSSTransition>
        )}
        {activeSection === 'skills' && (
          <CSSTransition key="skills" timeout={500} classNames="fade">
            <Skills />
          </CSSTransition>
        )}
        {activeSection === 'edu' && (
          <CSSTransition key="edu" timeout={500} classNames="fade">
            <Edu />
          </CSSTransition>
        )}
      </TransitionGroup>
      
    </>
  );
}

export default App;
