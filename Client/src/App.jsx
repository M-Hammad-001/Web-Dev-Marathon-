import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'

=======
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Courses from './Components/Courses'
>>>>>>> 4772818 (Courses)

function App() {

  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<TDashboard />} />
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/:id" element={<CourseDetail />} /> */}
        </Routes>
      </Router>
=======
      <Hero/>
      <Navbar/>
      <Courses/>
>>>>>>> 4772818 (Courses)
    </>
  )
}

export default App
