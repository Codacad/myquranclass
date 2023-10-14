import React from 'react'
import { motion } from 'framer-motion'
import '../css/LandingPage.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
          <div className="text-content">
            <h1>Let's gain Islamic knowledge by learning about Quran and Hadith</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laboriosam reiciendis nisi, esse placeat ad.</p>
            <Link to="/message" className="get-started">get Started</Link>
          </div>
          <div className="images">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0, duration:.5}} className='img img-1'></motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5, duration:.5}} className='img img-2'></motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:.5}} className='img img-3'></motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className='img img-4'></motion.div>
          </div>
      </div>
    </>
  )
}

export default LandingPage
