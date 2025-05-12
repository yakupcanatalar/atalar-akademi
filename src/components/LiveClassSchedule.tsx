import React from 'react';
import '../styles/Schedule.css';

const classSchedule = [
  { konu: 'Temel Matematik', seviye: 'İleri Düzey', Saat: '100+' },
  { konu: 'Geometri', seviye: 'İleri Düzey', Saat: '200+' },
  { konu: 'Cebir', seviye: 'Her Düzey', Saat: '150+' },
  { konu: 'Problem Çözüm Teknikleri', seviye: 'Her Düzey', Saat: '300+' },
  { konu: 'LGS Hazırlık', seviye: 'Sadece 8. Sınıf', Saat: '1000+' },
];

const LiveClassSchedule: React.FC = () => {
  return (
    <div className="schedule-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Konu</th>
            <th>Seviye</th>
            <th>Saat</th>
          </tr>
        </thead>
        <tbody>
          {classSchedule.map((cls, index) => (
            <tr key={index}>
              <td>{cls.konu}</td>
              <td>{cls.seviye}</td>
              <td>{cls.Saat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveClassSchedule;