import React from 'react';
import '../styles/Footer.css';
import { Instagram, Youtube, Twitter } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>İletişim</h3>
          <p>Email: senatalar@gmail.com</p>
          <p>Telefon: (543) 230-4101</p>
        </div>
        <div className="footer-links">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li><a href="/hakkimda">Hakkımda</a></li>
            <li><a href="/randevu">Randevu Al</a></li>
            <li><a href="/oneriler">Önerilerimiz</a></li>
          </ul>
        </div>
<div className="footer-social">
  <h3>Sosyal Medya</h3>
  <div className="social-icons">
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Instagram size={28} />
    </a>
    <a 
      href="https://youtube.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Youtube size={28} />
    </a>
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Twitter size={28} />
    </a>
  </div>
</div>

      </div>
      <div className="footer-bottom">
        <p>&copy; Atalar Tasarım&Yazılım. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;