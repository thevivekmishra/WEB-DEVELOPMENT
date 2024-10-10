import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import toast, { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* <Route index="/" element={<Home/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App