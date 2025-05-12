import React from 'react';
import '../styles/Highlights.css';
import { BookOpen, Video, FileText, Clipboard } from 'lucide-react';

const Highlights: React.FC = () => {
  const services = [
    { 
      title: 'Online / Yüz yüze özel ders', 
      description: 'Birebir eğitim ile başarıya ulaşın.', 
      icon: <BookOpen size={40} color="#6a11cb" /> 
    },
    { 
      title: 'Soru çözüm videoları', 
      description: 'YouTube üzerinden detaylı soru çözümleri.', 
      icon: <Video size={40} color="#2575fc" /> 
    },
    { 
      title: 'Konu anlatımları', 
      description: 'Temel ve ileri düzey konuların detaylı anlatımları.', 
      icon: <Clipboard size={40} color="#28a745" /> 
    },
  ];

  return (
    <div className="highlights-container">
      <div className="highlights-cards">
        {services.map((service, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">{service.icon}</div>
            <h3 className="highlight-card-title">{service.title}</h3>
            <p className="highlight-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;