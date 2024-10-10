import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Header from './components/Header'
import MainHeader from './components/MainHeader'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* Nested Route */}
        <Route path="/" element={<MainHeader />}>   {/* Parent route, write outlet in code to allow child route */}
          <Route index element={<Home />} />     {/*  default route */}
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App