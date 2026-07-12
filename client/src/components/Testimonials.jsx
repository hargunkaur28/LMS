import { Quote } from 'lucide-react';

export default function Testimonials() {
  const cards = [
    ['Ananya Sharma', 'Class 10 Student', 'The course path helped me revise Science chapters with questions after every lesson.', '/images/reviews/female-1.jpg'],
    ['Rohan Mehta', 'JEE Aspirant', 'Seeing my quiz score right after practice made weak chapters very clear before mocks.', '/images/reviews/male-1.png'],
    ['Neha Patil', 'NEET Aspirant', 'Biology quizzes here are highly NCERT-oriented. The explanations are extremely clear.', '/images/reviews/female-2.jpg'],
    ['Aarav Gupta', 'Class 12 Board', 'Best way to revise Physics derivations and try mock tests. 100% recommended!', '/images/reviews/male-2.png'],
    ['Aditya Kumar', 'JEE 2026', 'Simple interface, no clutter, and directly linked to top teacher playlists. Saved me hours.', '/images/reviews/male-3.png'],
    ['Pooja Iyer', 'Class 10 Board', 'Found the math foundations super easy to follow. The progress tracking keeps me motivated.', '/images/reviews/female-3.jpg']
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
