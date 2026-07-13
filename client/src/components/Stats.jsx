import { ClipboardCheck, LibraryBig, PlayCircle, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    [LibraryBig, '3+', t('stats.courses')],
    [ClipboardCheck, '36+', t('stats.quizQuestions')],
    [PlayCircle, '500+', t('stats.videoLessons')],
    [Trophy, '12+', t('stats.classesCovered')]
  ];

  return (
    <section className="stats-bar">
      {stats.map(([Icon, number, label]) => (
        <div className="stat" key={label}>
          <span><Icon size={26} /></span>
          <strong>{number}</strong>
          <p>{label}</p>
        </div>
      ))}
    </section>
  );
}
