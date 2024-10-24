import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Button  from './pages/Button/Button';
import Example from './pages/Example/Example';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        {/* Only display Navbar if user is authenticated */}
        {isAuthenticated && <Navbar isAuth={isAuthenticated} setAuth={setIsAuthenticated} />}
        
        <Routes>
          {/* Public Route: Login */}
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute isAuth={isAuthenticated}><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute isAuth={isAuthenticated}><About /></ProtectedRoute>} />
          <Route path="/button" element={<ProtectedRoute isAuth={isAuthenticated}><Button /></ProtectedRoute>} />
          <Route path="/example" element={<ProtectedRoute isAuth={isAuthenticated}><Example /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
