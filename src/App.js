import React from 'react'
import './css/App.css'
import {HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Teachers from './pages/Teachers'
import About from './pages/About'
import ZoomMeeting from './pages/ZoomMeeting'
const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />}/>
          <Route path='/teachers' element={<Teachers />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
