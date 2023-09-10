import React from 'react'
import Girls from '../images/girls.png'
import '../css/PrivateClass.css'
import { Link } from 'react-router-dom'

const PrivateClass = () => {
  return (
    <>
      <div className="private-class">
        <div className="content-side">
          <div className="content">
            <h3>Features</h3>
            <h1>Specify the time and day of private class</h1>
            <p>In accordance with Islamic principles, please specify the time and day for your private class. We respect the sacredness of time and scheduling, and we aim to accommodate your preferred timing within the framework of Islamic guidelines. Your convenience and adherence to your chosen schedule are important to us, and we strive to provide a flexible and respectful approach to meet your educational needs.</p>
            <Link to="#">Call Teacher</Link>
          </div>
        </div>
        <div className="img-side">
          <img src={Girls} alt="Boy" />
        </div>
      </div>
    </>
  )
}

export default PrivateClass