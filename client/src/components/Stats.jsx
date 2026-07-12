import { ClipboardCheck, LibraryBig, PlayCircle, Trophy } from 'lucide-react';

export default function Stats() {
  const stats = [
    [LibraryBig, '3+', 'Real YouTube Courses'],
    [ClipboardCheck, '36+', 'Quiz Questions'],
    [PlayCircle, '500+', 'Video Lessons'],
    [Trophy, '12+', 'Classes Covered']
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
