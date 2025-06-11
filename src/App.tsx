import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Recommendations from './pages/Recommendations';
import './styles/global.css';
import Announcement from './pages/Announcement';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<About />} />
            <Route path="/randevu" element={<Booking />} />
            <Route path="/oneriler" element={<Recommendations />} />
            <Route path="/duyurular" element={<Announcement />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;