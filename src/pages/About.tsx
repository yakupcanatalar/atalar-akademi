import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  const references = [
    {
      name: 'Ahmet Yılmaz',
      profession: 'Veli',
      comment: 'Sena Hoca sayesinde çocuğum matematiği sevmeye başladı ve LGS’de büyük bir başarı elde etti.',
    },
    {
      name: 'Elif Kaya',
      profession: 'Öğrenci',
      comment: 'Sena Hoca’nın dersleri çok eğlenceli ve öğretici. Matematik artık benim için çok kolay!',
    },
    {
      name: 'Mehmet Demir',
      profession: 'Veli',
      comment: 'Sena Hoca’nın birebir ilgisi ve özverisi sayesinde çocuğumun özgüveni arttı.',
    },
  ];

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

      <section className="about-references card">
        <h2 className="section-title">Referanslar</h2>
        <ul className="references-list">
          {references.map((ref, index) => (
            <li key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p><strong>{ref.profession}</strong></p>
              <p>"{ref.comment}"</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;