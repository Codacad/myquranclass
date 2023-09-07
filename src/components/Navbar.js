import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="join-quickly">
          <span>Join our online Quran and Hadith classes quickly, </span>
          <Link to="https://wa.me/+918937865765">+918937865765</Link>
        </div>
        <nav>
            <div className="logo">
              <Link to="#">MYQURANCLASS</Link>
            </div>
              <ul className='nav-list'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/courses">Courses</Link></li>
                <li className='nav-item'><Link to="/about">About</Link></li>
                <li className='nav-item'><Link to="/contact">Contact</Link></li>
                <li className='nav-item'><Link to="/teachers">Teachers</Link></li>
            </ul>
            <Link to="https://forms.gle/osxA5UGdysD7F5xUA" className="admission">Admission</Link>
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
