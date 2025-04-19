import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
