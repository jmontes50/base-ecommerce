import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './modules/ui/Navbar'
import HomeView from './modules/Home/HomeView'

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  )
}

export default App