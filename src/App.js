import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar/Navbar';
// import CustomButton from './components/CustomButton/CustomButton';
// import HeroSection from './components/Sections/HeroSection/HeroSection';
// import AboutSection from './components/Sections/AboutSection/AboutSection';
import AppPage from './Page/AppPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
