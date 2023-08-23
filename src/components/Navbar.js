import React from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="join-quickly">
          <span>Join our online Quran and Hadith classes quickly, </span>
          <a href="https://wa.me/+918937865765">+918937865765</a>
        </div>
        <nav>
            <div className="logo">
              <a href="#">MYQURANCLASS</a>
            </div>
              <ul className='nav-list'>
                <li className='nav-item'><a href="3">Home</a></li>
                <li className='nav-item'><a href="3">Courses</a></li>
                <li className='nav-item'><a href="3">About</a></li>
                <li className='nav-item'><a href="3">Contact</a></li>
                <li className='nav-item'><a href="3">Teachers</a></li>
            </ul>
            <a href="#" className="admission">Admission</a>
        </nav>
      </div>
    </>
  )
}

export default Navbar
