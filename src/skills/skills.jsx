import React from 'react'
import './skills.css'
import Card from '../card/card'

const Skills = () => {
  return (
    <div className='skills'>
      <header><h1 className='headings'>My Skills</h1></header>
      <div className="box">
      <div className="skillscontent">
        <Card progress={90} label="C"/>
        <Card progress={90} label="C++"/>
        <Card progress={60} label="Python"/>
        <Card progress={90} label="HTML"/>
        <Card progress={90} label="CSS"/>
        <Card progress={70} label="Tailwind CSS"/>
        </div>
        <div className="skillscontent">
        <Card progress={80} label="React JS"/>
        <Card progress={80} label="JavaScript"/>
        <Card progress={60} label="Node.js"/>
        <Card progress={60} label="Express.js"/>
        <Card progress={80} label="MySQL"/>
        <Card progress={60} label="MongoDB"/>
        </div>
        
        </div>
      
    </div>
  )
}

export default Skills
