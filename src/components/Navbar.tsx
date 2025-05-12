import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img 
            src="/logo.jpg" 
            alt="Atalar LGS Akademi Logo" 
            className="navbar-logo"
          />
          <span className="navbar-title">Atalar LGS Akademi</span>
        </div>

        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
        >
          {isOpen ? '×' : '☰'}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link 
              to="/hakkimda" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link 
              to="/randevu" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Randevu Al
            </Link>
          </li>
          <li>
            <Link 
              to="/oneriler" 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Önerilerimiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;