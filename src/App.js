import React from 'react'
import './css/App.css'
import {HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Message from './components/Message'
import Main from './components/Main'
const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />}/>
          <Route path='/message' element={<Message />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
