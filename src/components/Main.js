import React from 'react'
import LandingPage from './LandingPage'
import AccessLeanring from './AccessLeanring'
import ChooseToLearn from './ChooseToLearn'
import PrivateClass from './PrivateClass'
import TutoringService from './TutoringService'
import Message from './Message'
import EducationAyat from './EducationAyat'

const Main = () => {
  return (
    <>
      <LandingPage />
      <TutoringService />
      <EducationAyat />
      <AccessLeanring />
      <ChooseToLearn />
      <PrivateClass />
      <Message />
    </>
  )
}

export default Main
