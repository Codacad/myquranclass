import React from 'react'
import '../css/AccessLearning.css'
import { Link } from 'react-router-dom'

const AccessLeanring = () => {
  return (
    <>
      <div className="access-learning">
          <div className="img-side">

          </div>
          <div className="content-side">
            <div className="content">
              <h3>Learning Methods</h3>
              <h1>Access to learning anytime anywhere</h1>
              <p>Empowering lifelong Islamic education through accessible, flexible learning opportunities anytime, anywhere. Enrich your knowledge with convenience and flexibility.</p>
              <div className="keywords">
                <span>World Classes</span>
                <span>Easy Learning</span>
                <span>Flexible</span>
                <span>Affordable</span>
              </div>
              <Link to="#" className="get-started">Get Started</Link>
            </div>
          </div>
      </div>
    </>
  )
}

export default AccessLeanring
