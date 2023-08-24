import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import AccessLeanring from './components/AccessLeanring'
import ChooseToLearn from './components/ChooseToLearn'
const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AccessLeanring />
      <ChooseToLearn />
    </div>
  )
}

export default App
