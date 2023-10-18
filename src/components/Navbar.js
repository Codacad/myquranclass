import React from 'react'
import '../css/Navbar.css'
import Logo from '../images/logo 200x60.png'
import IconMenu from '../images/icon-menu.svg'
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
              <Link to="#"><img src={Logo} alt="" /></Link>
            </div>
            <ul className='nav-list'>
              <li className='nav-item'><Link to="/">Home</Link></li>
              {/* <li className='nav-item'><Link to="/courses">Courses</Link></li> */}
              <li className='nav-item'><Link to="/teachers">Teachers</Link></li>
              <li className='nav-item'><Link to="/about">About</Link></li>          
            </ul>
            <Link to="https://forms.gle/osxA5UGdysD7F5xUA" className="admission">Admission</Link>
            <div className="hamburger-menu">
              <img src={IconMenu} alt="" />
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
