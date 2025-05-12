import React, { useState } from 'react';
import '../styles/RecommendedTeachers.css';

const teachers = [
  {
    name: 'Ayşe ATALAR',
    phone: '0555 555 55 55',
    subject: 'Coğrafya',
    cv: 'Ayşe ATALAR, 30 yıllık deneyimiyle coğrayfa alanında uzmanlaşmış emekli bir öğretmendir. Lise ve üniversite hazırlık öğrencilerine yönelik dersler vermektedir. Sadece Kadın öğrencilere ve online ders vermektedir.',
  },
  {
    name: 'Çağrı ATALAR',
    phone: '0555 666 66 66',
    subject: 'Felsefe',
    cv: 'Çağrı ATALAR , Kendisini amatör felsefeci olarak tanımlayan bir kişidir. Öğrencilerine felsefi düşünme becerilerini geliştirmeye yönelik dersler vermektedir.',
  },
  {
    name: 'Yusuf ATALAR',
    phone: '0543 987 65 43',
    subject: 'Biyoloji',
    cv: 'Yusuf ATALAR, biyoloji alanında 12 yıllık deneyime sahip bir öğretmendir. Lise ve üniversite hazırlık öğrencilerine biyoloji dersleri vermektedir.',
  },
];

const RecommendedTeachers: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<null | typeof teachers[0]>(null);

  return (
    <div className="recommended-teachers">
      <h2 className="section-title">Önerdiğimiz Öğretmenler</h2>
      <ul className="teacher-list">
        {teachers.map((teacher, index) => (
          <li
            key={index}
            className="teacher-item"
            onClick={() => setSelectedTeacher(teacher)}
          >
            <h3>{teacher.name}</h3>
            <p>{teacher.subject} Öğretmeni</p>
            <p>Telefon: {teacher.phone}</p>
          </li>
        ))}
      </ul>

      {selectedTeacher && (
        <div className="teacher-modal">
          <div className="modal-content">
            <h3>{selectedTeacher.name}</h3>
            <p><strong>Branş:</strong> {selectedTeacher.subject}</p>
            <p><strong>Telefon:</strong> {selectedTeacher.phone}</p>
            <p><strong>CV:</strong> {selectedTeacher.cv}</p>
            <button onClick={() => setSelectedTeacher(null)}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedTeachers;