import React from 'react'
import "./navbar.css"

export default function Nav() {
  return (
    <div className="top">
      <div className="topLeft">
      K
      
      </div>
      
      <div className="topRight">
      <ul className="topList">
          <a href='https://meet.google.com/'><li className="topListItem">HOME</li></a>
          <li className="topListItem">ABOUT US</li>
          <li className="topListItem">CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}
