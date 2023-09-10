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
              <p>Effective teaching methods in Islam prioritize engagement, empathy, and personalized guidance, fostering a deep, lasting understanding of knowledge.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>🎆</h1>
              <h2>Quality of education</h2>
              <p>Quality education is a fundamental Islamic value, emphasizing knowledge, ethics, and lifelong learning to foster a just and enlightened society.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>🧩</h1>
              <h2>Tutor-student interaction</h2>
              <p>Tutor-student interaction in Islam promotes knowledge sharing, respect, and mentorship, fostering a nurturing and virtuous learning environment.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
          <div className="service">
              <h1>👍🏽</h1>
              <h2>Feedback and improvement</h2>
              <p>Feedback is a gift from Allah. Embrace it humbly, seek improvement, and grow closer to Him through continuous self-betterment.</p>
              <Link to="#" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutoringService
