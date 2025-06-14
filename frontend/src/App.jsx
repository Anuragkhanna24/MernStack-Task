import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Welcome from './Components/Welcome'

function App() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {
          token ?
            <>
              <Route path='/welcome' element={<Welcome />} />
            </>
             :
            <Route path='/' element={<Login />} />

        }

      </Routes>
    </BrowserRouter>
  )
}

export default App
