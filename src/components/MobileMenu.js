import React from 'react'
import '../css/Navbar.css'
import Logo from '../images/logo 200x60.png'
import IconMenu from '../images/icon-menu.svg'
import { Link } from 'react-router-dom'
const MobileMenu = ({toggleMoblieMenu, setToggleMobileMenu}) => {
  return (
    <>
      <div className={!toggleMoblieMenu ? "mobile-menu" : "mobile-menu toggle-menu"}>        
        <nav>           
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScyZ843V5Ntj-6PCWus3VZJTU-gbeMwlhQYRjqA06SmtiE2Uw/viewform?usp=sf_link" className="mobile-admission">Admission</Link>          
          <ul className='menu-list'>
            <li className='menu-item'><Link to="/" onClick={() => setToggleMobileMenu(!toggleMoblieMenu)}>Home</Link></li>
            {/* <li className='menu-item'><Link to="/courses">Courses</Link></li> */}
            <li className='menu-item'><Link to="/teachers" onClick={() => setToggleMobileMenu(!toggleMoblieMenu)}>Teachers</Link></li>
            <li className='menu-item'><Link to="/about" onClick={() => setToggleMobileMenu(!toggleMoblieMenu)}>About</Link></li>          
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
