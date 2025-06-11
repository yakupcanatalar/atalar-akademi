import React from 'react';
import '../styles/Announcement.css'; // Duyuru sayfası için özel CSS

const Announcement: React.FC = () => {
  return (
    <div className="announcement-page">
      <section className="announcement-banner">
        <div className="brochure-container">
          <div className="brochure-content">
            <div className="announcement-badge">
              <span className="badge-text">🔥 YENİ DUYURU</span>
            </div>
            <h2 className="announcement-title">
              LGS Matematik Yaz Kampı Başlıyor! 
              <span className="highlight-text">✨</span>
            </h2>
            <div className="brochure-image-container">
              <img 
                src="/brosur.jpg" 
                alt="LGS Matematik Yaz Kampı Broşürü" 
                className="brochure-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <p className="overlay-text">Kişiye Özel Program</p>
                  <p className="overlay-text">Online & Yüz Yüze Eğitim</p>
                  <p className="overlay-text">7. ve 8. Sınıf Öğrencileri</p>
                </div>
              </div>
            </div>
            <div className="announcement-details">
              <h3 className="details-title">🎯 Program Detayları</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <h4>📚 Program İçeriği</h4>
                  <ul>
                    <li>Kişiye özel planlanmış matematik programı</li>
                    <li>LGS müfredatına uygun konu anlatımları</li>
                    <li>Soru çözüm teknikleri ve stratejileri</li>
                    <li>Deneme sınavları ve performans takibi</li>
                  </ul>
                </div>
                <div className="detail-item">
                  <h4>🎓 Hedef Kitle</h4>
                  <ul>
                    <li>7. sınıf öğrencileri (temel güçlendirme)</li>
                    <li>8. sınıf öğrencileri (LGS hazırlığı)</li>
                    <li>Matematik notunu artırmak isteyenler</li>
                    <li>LGS'de yüksek puan hedefleyenler</li>
                  </ul>
                </div>
                <div className="detail-item">
                  <h4>💡 Eğitim Formatı</h4>
                  <ul>
                    <li>Online canlı dersler</li>
                    <li>Yüz yüze bireysel dersler</li>
                    <li>Hibrit eğitim seçeneği</li>
                    <li>Kayıtlı ders tekrarları</li>
                  </ul>
                </div>
              </div>
              <div className="contact-info">
                <p className="details-text">
                  📞 <strong>Bilgi & Kayıt:</strong> 0543 230 41 01
                </p>
                <p className="details-text">
                  📧 <strong>E-posta:</strong> info@atalarlgsakademi.com
                </p>
                <p className="details-text">
                  📍 <strong>Adres:</strong> Online, İlkadım, Atakum
                </p>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="cta-primary">
                📞 Hemen Ara
              </button>
              <button className="cta-secondary">
                💬 WhatsApp İletişim
              </button>
              <button className="cta-secondary">
                📋 Kayıt Formu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Duyurular */}
      <section className="other-announcements">
        <h2 className="section-title">Diğer Duyurular</h2>
        <div className="announcements-grid">
          <div className="announcement-card">
            <div className="card-header">
              <span className="announcement-date">15 Haziran 2025</span>
              <span className="announcement-tag">Eğitim</span>
            </div>
            <h3 className="card-title">Yaz Dönemi Ders Programı Açıklandı</h3>
            <p className="card-description">
              2025 yaz dönemi matematik dersleri için yeni program ve saatler belirlendi. 
              Detaylar için iletişime geçebilirsiniz.
            </p>
          </div>
          
          <div className="announcement-card">
            <div className="card-header">
              <span className="announcement-date">10 Haziran 2025</span>
              <span className="announcement-tag">Başarı</span>
            </div>
            <h3 className="card-title">LGS 2025 Başarı Hikayelerimiz</h3>
            <p className="card-description">
              Bu yıl da öğrencilerimiz LGS'de büyük başarı elde ettiler. 
              Tebrik ediyor, gelecek yıl hedeflerinize ulaşmak için bekliyoruz.
            </p>
          </div>

          <div className="announcement-card">
            <div className="card-header">
              <span className="announcement-date">5 Haziran 2025</span>
              <span className="announcement-tag">Kampanya</span>
            </div>
            <h3 className="card-title">Yeni Dönem Erken Kayıt İndirimi</h3>
            <p className="card-description">
              Yeni dönem için erken kayıt yaptıran öğrencilerimize özel %20 indirim fırsatı. 
              Son başvuru tarihi: 30 Haziran.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcement;