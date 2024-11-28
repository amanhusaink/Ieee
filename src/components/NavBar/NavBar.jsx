import React from 'react'
import './Nav.css';

function NavBar() {
    
    
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img className='imge' src='./Vector.svg' alt='no'></img>
        </div>

        {/* Toggle button for mobile view */}
        <div className="menu-icon" >
    
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links `}>
          <li className='nav-center'><a href="#home">Home</a></li>
          <li className='nav-center'><a href="#about">About</a></li>
          <li className='nav-center'><a href="#achievements">Achievements</a></li>
          <li className='nav-center'><a href="#events">Events</a></li>
          <li className='nav-center'><a href="#chapters">Chapters</a></li>
          <li className='nav-center'><a href="#gallery">Gallery</a></li>
          <li className='nav-center'><a href="#excom">Excom</a></li>
        </ul>
        <div className='flex'>
            
            <img className='img-1 flex-1' src='./AWH.png' alt='No support'></img>
            
        </div>
      </div>
     
    </nav>
    </div>
  )
}

export default NavBar;
