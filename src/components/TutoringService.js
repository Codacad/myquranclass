import React from 'react'
import '../css/TutoringService.css'
import { Link } from 'react-router-dom'
const TutoringService = () => {
  return (
    <>
      <div className="tutoring-service">
        <div className="headings">
          <h3>Happy Service</h3>
          <h1>How is our tutoring service?</h1>
        </div>
        <div className="services">
          <div className="service">
              <h1>🧑🏽‍🏫</h1>
              <h2>Effective teaching methods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, laudantium!</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>🎆</h1>
              <h2>Quality of education</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, commodi.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>🧩</h1>
              <h2>Tutor-student interaction</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, similique?</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>👍🏽</h1>
              <h2>Feedback and improvement</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutoringService
