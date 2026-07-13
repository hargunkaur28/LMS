import { Quote } from 'lucide-react';

export default function Testimonials() {
  const cards = [
    ['Ananya Sharma', 'Class 10 Student', 'The course path helped me revise Science chapters with questions after every lesson.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'],
    ['Rohan Mehta', 'JEE Aspirant', 'Seeing my quiz score right after practice made weak chapters very clear before mocks.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80'],
    ['Neha Patil', 'NEET Aspirant', 'Biology quizzes here are highly NCERT-oriented. The explanations are extremely clear.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'],
    ['Aarav Gupta', 'Class 12 Board', 'Best way to revise Physics derivations and try mock tests. 100% recommended!', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'],
    ['Aditya Kumar', 'JEE 2026', 'Simple interface, no clutter, and directly linked to top teacher playlists. Saved me hours.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'],
    ['Pooja Iyer', 'Class 10 Board', 'Found the math foundations super easy to follow. The progress tracking keeps me motivated.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80']
  ];

  return (
    <section className="testimonials" id="success-stories">
      <span className="section-kicker">Testimonials</span>
      <h2>What our students say</h2>
      <div className="marquee-container">
        <div className="marquee-track testimonial-track">
          {[...cards, ...cards].map(([name, label, text, imageSrc], index) => (
            <article className="testimonial-card" key={`${name}-${index}`}>
              <Quote size={34} />
              <p>{text}</p>
              <div>
                <img src={imageSrc} alt={`${name} portrait`} />
                <span><strong>{name}</strong>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
