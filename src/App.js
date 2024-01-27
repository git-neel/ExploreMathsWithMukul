// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import { useState } from 'react';


function App() {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    
    <BrowserRouter>
      <Navigation /> {/* Integrate the Navigation component */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
