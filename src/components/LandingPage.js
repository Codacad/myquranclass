import React from 'react'
import MainOne from '../images/main-1.jpg'
import MainTwo from '../images/main-2.jpg'
import MainThree from '../images/main-3.jpg'
import MainFour from '../images/main-4.jpg'
import '../css/LandingPage.css'
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
          <div className="text-content">
            <h1>Let's gain Islamic knowledge by learning about Quran and Hadith</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laboriosam reiciendis nisi, esse placeat ad.</p>
            <a href="#" className="get-started">get Started</a>
          </div>
          <div className="images">
            <img src={MainOne} className='img-1' alt="Main Image One" />
            <img src={MainTwo} className='img-2' alt="Main Image Two" />
            <img src={MainThree} className='img-3' alt="Main Image Three" />
            <img src={MainFour} className='img-4' alt="Main Image Four" />
          </div>
      </div>
    </>
  )
}

export default LandingPage
