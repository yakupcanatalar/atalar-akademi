import React from 'react';
import '../styles/Recommendations.css';

const recommendationData = [
  {
    title: 'Düzenli Çalışma Planı',
    description: 'Her gün düzenli olarak matematikle zaman geçirin. Günlük 1-2 saat çalışma, uzun vadede büyük farklar yaratır.',
    icon: '📅'
  },
  {
    title: 'Temel Konuları Güçlendirin',
    description: 'Matematiğin temel kavramlarını çok iyi öğrenin. Her yeni konu, önceki konulara dayanır.',
    icon: '🧩'
  },
  {
    title: 'Çözülmüş Sorulardan Öğrenin',
    description: 'Çözülmüş soruları inceleyerek farklı çözüm yöntemlerini keşfedin ve anlayın.',
    icon: '📚'
  },
  {
    title: 'Hatalardan Korkmayın',
    description: 'Yaptığınız hataları öğrenme fırsatı olarak görün. Her hata sizi daha ileriye taşır.',
    icon: '🌱'
  },
  {
    title: 'Günlük Pratik Yapın',
    description: 'Her gün mutlaka birkaç soru çözün. Düzenlilik başarının anahtarıdır.',
    icon: '✏️'
  }
];

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations-page">
      <section className="recommendations-hero card">
        <h1 className="section-title">Matematikle Başarıya Giden Yol</h1>
        <p className="recommendations-intro">
          Matematikte başarılı olmak için hazırladığım özel öneriler. 
          Bu ipuçları, öğrencilerimin LGS'de yüksek puanlar almasına yardımcı olmuştur.
        </p>
      </section>

      <section className="recommendations-list card">
        <h2 className="section-title">Öğrenci Başarısı İçin 5 Altın Öneri</h2>
        <div className="recommendations-grid">
          {recommendationData.map((rec, index) => (
            <div key={index} className="recommendation-item">
              <div className="recommendation-icon">{rec.icon}</div>
              <h3>{rec.title}</h3>
              <p>{rec.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="study-resources card">
        <h2 className="section-title">Tavsiye Edilen Kaynaklar</h2>
        <div className="resources-list">
          <div className="resource-item">
            <h3>📖 Ders Kitapları</h3>
            <p>MEB onaylı güncel ders kitapları</p>
          </div>
          <div className="resource-item">
            <h3>💻 Online Platformlar</h3>
            <p>EBA, Morpa Kampüs gibi eğitim platformları</p>
          </div>
          <div className="resource-item">
            <h3>✏️ Soru Bankaları</h3>
            <p>Güvenilir yayınevlerinin LGS soru kitapları</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;