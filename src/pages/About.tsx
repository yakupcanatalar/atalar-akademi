import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero card">
        <h1 className="section-title">Sena Hoca Kimdir?</h1>
        <div className="about-content">
          <img 
            src="/ProfilePage.png" 
            alt="Sena Hoca" 
            className="about-image"
          />
          <div className="about-text">
            <p>
              Merhaba! Ben Sena, matematiği sevdiren ve öğrencilerinin potansiyelini 
              açığa çıkaran bir eğitimciyim. 5 yılı aşkın süredir LGS ve Üniversiteye Hazırlık
              eğitimi veriyor ve öğrencilerimin başarısına adanmış bir kariyere sahibim.
            </p>
            <p>
              Atalar LGS Akademi'de amacımız, matematiği sadece bir ders olarak 
              görmek yerine hayatın bir parçası olarak keşfetmektir. Her öğrencinin 
              benzersiz öğrenme yeteneğine inanan bir eğitimci olarak, bireysel 
              yaklaşımlarla öğrencilerimizin matematikle olan ilişkisini güçlendiriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="about-education card">
        <h2 className="section-title">Eğitim ve Deneyim</h2>
        <ul className="education-list">
          <li>
            <strong>Lisans:</strong> Bayburt Üniversitesi İlköğretim Matematik Öğretmenliği
          </li>
          <li>
            <strong>Deneyim:</strong> 2+ yıl Yargı Eğitim Kurumları
          </li>
          <li>
            <strong>Deneyim:</strong> 2+ yıl AmericanLife Eğitim Kurumları
          </li>
          <li>
            <strong>Deneyim:</strong> 5+ yıl Özel Ders
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;