import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import AccessLeanring from './components/AccessLeanring'
import ChooseToLearn from './components/ChooseToLearn'
import PrivateClass from './components/PrivateClass'
const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AccessLeanring />
      <ChooseToLearn />
      <PrivateClass />
    </div>
  )
}

export default App
