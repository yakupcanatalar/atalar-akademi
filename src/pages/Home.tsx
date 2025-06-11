import React from 'react';
import { Link } from 'react-router-dom';
import StudentAchievementChart from '../components/Highlights';
import LiveClassSchedule from '../components/LiveClassSchedule';
import '../styles/Home.css';
import Highlights from '../components/Highlights';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero card">
        <h1 className="hero-title">Atalar LGS Akademi ile Matematiği Keşfedin</h1>
        <p className="hero-description">
          Matematik, sadece formüllerden ibaret değildir. Deneyimli öğretmen Sena Atalar ile öğrenciler; analitik düşünmeyi, problem çözmenin keyfini ve matematiğin hayatın içindeki yerini keşfeder. Matematiğe olan ilgilerini artırıyor, özgüvenlerini pekiştiriyor ve onları başarıya taşıyorum.
        </p>
      </section>

      {/* Duyuru Özeti */}
      <section className="announcement-summary">
        <div className="summary-container">
          <div className="summary-content">
            <div className="announcement-badge">
              <span className="badge-text">🔥 YENİ DUYURU</span>
            </div>
            <h2 className="summary-title">
              LGS Matematik Yaz Kampı Başlıyor! 
              <span className="highlight-text">✨</span>
            </h2>
            <div className="summary-details">
              <p className="summary-text">
                🎯 <strong>Kişiye özel planlanmış program</strong> ile matematikte fark yarat!
              </p>
              <p className="summary-text">
                📞 <strong>Bilgi & Kayıt:</strong> 0543 230 41 01
              </p>
            </div>
            <div className="summary-buttons">
              <Link to="/duyurular" className="cta-primary">
                📋 Detayları Gör
              </Link>
              <button className="cta-secondary">
                📞 Hemen Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements card">
        <h2 className="section-title">Sunulan İçerikler / Hizmetler</h2>
        <Highlights />
      </section>
             
      {/* YouTube Video Section */}
      <section className="video-section card">
        <h2 className="section-title">Tanıtım Videosu</h2>
        <div className="video-container small-video">
          <iframe
            src="https://www.youtube.com/embed/qcJtPCje3sY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Live Class Schedule */}
      <section className="schedule card">
        <h2 className="section-title">Ders İçerikleri ve Seviyeleri</h2>
        <LiveClassSchedule />
      </section>
    </div>
  );
};

export default Home;