import React, { useState, FormEvent } from 'react';
import '../styles/Booking.css';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert('Randevu talebi gönderildi! Size en kısa sürede geri dönüş yapılacaktır.');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    });
  };

  return (
    <div className="booking-page">
      <section className="booking-section card">
        <h1 className="section-title">Randevu Al</h1>
        
        <div className="booking-content">
          <div className="booking-info">
            <h2>Randevu Detayları</h2>
            <p>
              Bireysel veya grupla ders almak için hemen randevu talebinizi oluşturabilirsiniz. 
              Size en uygun zaman ve yöntemle iletişime geçeceğiz.
            </p>
            <div className="contact-details">
              <h3>İletişim Bilgileri</h3>
              <p>📞 (543) 230-4101</p>
              <p>✉️ senatalar@gmail.com</p>
              <p>📍Atatepe, Atakum</p>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Tercih Edilen Tarih</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Açıklama</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Randevu talebi ile ilgili detayları yazabilirsiniz..."
              ></textarea>
            </div>

            <button type="submit" className="btn">Randevu Talebi Gönder</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;