import { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, GraduationCap, Star, UsersRound, Video } from 'lucide-react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-copy hero-reveal ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '0ms' }}>
        <div className="audience-pill">
          <GraduationCap size={16} />
          <span>Nursery to 12th</span>
          <strong>JEE</strong>
          <strong>NEET</strong>
        </div>
        <h1>Learning that <span>grows</span> with every student.</h1>
        <p>
          Complete learning support for school academics from Nursery to Grade 12, plus JEE and NEET preparation through
          real YouTube course pathways, quizzes and progress-ready content.
        </p>
        <div className="hero-actions">
          <a className="primary-button large" href="#courses">Start Learning Free <ArrowRight size={17} /></a>
          <a className="secondary-button large" href="#courses">Explore Courses <ArrowRight size={17} /></a>
        </div>
        <div className="student-count">
          <div className="avatar-stack">
            <img src="https://img.magnific.com/free-photo/two-colleagues-working-laptop_114579-2814.jpg?semt=ais_hybrid&w=740&q=80" alt="Indian student" />
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80" alt="Indian learner" />
            <img src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=120&q=80" alt="Indian mentor" />
          </div>
          <div><strong>50k+</strong><span>Students learning with us</span></div>
        </div>
      </div>
      <div className={`hero-visual hero-reveal ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '120ms' }} aria-label="Indian student learning online">
        <div className="feature-card top-left"><Video size={22} /><strong>Live Classes</strong><span>Learn in real time</span></div>
        <div className="feature-card top-right"><UsersRound size={22} /><strong>Expert Mentors</strong><span>Doubt help</span></div>
        <div className="feature-card mid-left"><BarChart3 size={22} /><strong>Mock Tests</strong><span>Practice and improve</span></div>
        <div className="feature-card mid-right"><Star size={22} /><strong>Progress Tracking</strong><span>Track your growth</span></div>
        <img className="main-student" src="https://img.magnific.com/free-photo/two-colleagues-working-laptop_114579-2814.jpg?semt=ais_hybrid&w=740&q=80" alt="Real Indian student holding books" />
      </div>
    </section>
  );
}
