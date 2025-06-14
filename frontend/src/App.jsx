import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Welcome from './Components/Welcome';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        
      
        <Route
          path='/welcome'
          element={
            token ? <Welcome /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;