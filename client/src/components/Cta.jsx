import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <section className="cta">
      <div className="cta-visual">
        <span className="cta-dot top-dot"></span>
        <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=520&q=85" alt="Indian student with backpack" />
        <span className="cta-dot bottom-dot"></span>
      </div>
      <div>
        <h2>Ready to start learning?</h2>
        <p>Join learners preparing for school exams, JEE and NEET with focused video courses and quizzes.</p>
      </div>
      <a className="secondary-button large" href="#courses">Apply for Membership <ArrowRight size={17} /></a>
    </section>
  );
}
