import React from 'react'
import { motion } from 'framer-motion'
import '../css/LandingPage.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
          <div className="text-content">            	
              <h1 className='bismillah'>
                &#65021;
                {/* &#xFDFD; */}
              </h1>
            <h1>Let's gain Islamic knowledge by learning about Quran and Hadith</h1>
            <p>
"Dive Into the Heart of Islam: Unlocking Profound Wisdom Through Quranic Exploration and Hadith Teachings".</p>
            <Link to="/message" className="get-started">get Started</Link>
          </div>         
          
      </div>
    </>
  )
}

export default LandingPage
