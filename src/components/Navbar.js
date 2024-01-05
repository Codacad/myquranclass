import React, {useState} from 'react'
import '../css/Navbar.css'
import Logo from '../images/logo 200x60.png'
import IconMenu from '../images/icon-menu.svg'
import Close from '../images/close.svg'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'
const Navbar = () => {
  let [toggleMoblieMenu, setToggleMobileMenu] = useState(false)
  const handleToggleMenu = () => {
    setToggleMobileMenu(!toggleMoblieMenu)
  }
  return (
    <>
      <div className="navbar">
        <div className="join-quickly">
          <span>Join our online Quran and Hadith classes quickly, </span>
          <Link to="https://wa.me/+918937865765">+918937865765</Link>
        </div>
        <nav>
            <div className="logo">
              <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <ul className='nav-list'>
              <li className='nav-item'><Link to="/">Home</Link></li>
              {/* <li className='nav-item'><Link to="/courses">Courses</Link></li> */}
              <li className='nav-item'><Link to="/teachers">Teachers</Link></li>
              <li className='nav-item'><Link to="/about">About</Link></li>          
            </ul>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScyZ843V5Ntj-6PCWus3VZJTU-gbeMwlhQYRjqA06SmtiE2Uw/viewform?usp=sf_link" className="admission">Admission</Link>
            <div className="hamburger-menu">
              <div className="icons">
                <motion.img initial={{opacity:0}} animate={{opacity:1}} className='open' src={!toggleMoblieMenu ? IconMenu : Close} alt="" onClick={handleToggleMenu}/>                
              </div>
            </div>
        </nav>        
      </div>      
      <MobileMenu toggleMoblieMenu={toggleMoblieMenu} setToggleMobileMenu={setToggleMobileMenu}/>
    </>
  )
}

export default Navbar
