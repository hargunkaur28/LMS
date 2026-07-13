import { useEffect, useState, useRef } from 'react';
import { ArrowRight, BarChart3, GraduationCap, Star, UsersRound, Video } from 'lucide-react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const shape4Ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only run cursor tracking parallax on desktop-like pointer devices without reduced motion setting
    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to the center of the hero section
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      targetX = x;
      targetY = y;
    };

    const tick = () => {
      // Lerp easing towards target position
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const shapes = [
        { ref: shape1Ref, fx: 0.05, fy: 0.05, cap: 35 },
        { ref: shape2Ref, fx: -0.04, fy: -0.04, cap: 30 },
        { ref: shape3Ref, fx: 0.03, fy: 0.03, cap: 25 },
        { ref: shape4Ref, fx: -0.06, fy: 0.06, cap: 40 }
      ];

      shapes.forEach(({ ref, fx, fy, cap }) => {
        if (ref.current) {
          const xOffset = currentX * fx;
          const yOffset = currentY * fy;
          const cappedX = Math.max(-cap, Math.min(cap, xOffset));
          const cappedY = Math.max(-cap, Math.min(cap, yOffset));
          
          ref.current.style.transform = `translate3d(${cappedX}px, ${cappedY}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    const container = heroRef.current;
    if (container) {
      container.addEventListener('pointermove', handlePointerMove);
      animationFrameId = requestAnimationFrame(tick);
    }

    return () => {
      clearTimeout(timer);
      if (container) {
        container.removeEventListener('pointermove', handlePointerMove);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Floating Blobs */}
      <div className="floating-blob-wrapper shape-1" ref={shape1Ref}>
        <div className={`floating-blob-reveal reveal-item ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '560ms', '--reveal-scale': '0.95' }}>
          <div className="floating-blob blob-violet"></div>
        </div>
      </div>
      <div className="floating-blob-wrapper shape-2" ref={shape2Ref}>
        <div className={`floating-blob-reveal reveal-item ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '560ms', '--reveal-scale': '0.95' }}>
          <div className="floating-blob blob-orange"></div>
        </div>
      </div>
      <div className="floating-blob-wrapper shape-3" ref={shape3Ref}>
        <div className={`floating-blob-reveal reveal-item ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '560ms', '--reveal-scale': '0.95' }}>
          <div className="floating-blob blob-mint"></div>
        </div>
      </div>
      <div className="floating-blob-wrapper shape-4" ref={shape4Ref}>
        <div className={`floating-blob-reveal reveal-item ${isMounted ? 'is-visible' : ''}`} style={{ '--delay': '560ms', '--reveal-scale': '0.95' }}>
          <div className="floating-blob blob-violet-orange"></div>
        </div>
      </div>

      <div className="hero-copy">
        <div 
          className={`audience-pill reveal-item ${isMounted ? 'is-visible' : ''}`} 
          style={{ '--delay': '0ms', '--reveal-translate': '10px' }}
        >
          <GraduationCap size={16} />
          <span>Nursery to 12th</span>
          <strong>JEE</strong>
          <strong>NEET</strong>
        </div>
        <h1>
          <span 
            className={`hero-title-line line-1 reveal-item ${isMounted ? 'is-visible' : ''}`}
            style={{ '--delay': '100ms', '--reveal-translate': '16px' }}
          >
            Learning that <span className="highlight-word">grows</span>
          </span>
          <span 
            className={`hero-title-line line-2 reveal-item ${isMounted ? 'is-visible' : ''}`}
            style={{ '--delay': '200ms', '--reveal-translate': '16px' }}
          >
            with every student.
          </span>
        </h1>
        <p 
          className={`reveal-item ${isMounted ? 'is-visible' : ''}`} 
          style={{ '--delay': '300ms', '--reveal-translate': '12px' }}
        >
          Complete learning support for school academics from Nursery to Grade 12, plus JEE and NEET preparation through
          real YouTube course pathways, quizzes and progress-ready content.
        </p>
        <div 
          className={`hero-actions reveal-item ${isMounted ? 'is-visible' : ''}`} 
          style={{ '--delay': '400ms', '--reveal-translate': '10px' }}
        >
          <a className="primary-button large" href="#courses">Start Learning Free <ArrowRight size={17} /></a>
          <a className="secondary-button large" href="#courses">Explore Courses <ArrowRight size={17} /></a>
        </div>
        <div 
          className={`student-count reveal-item ${isMounted ? 'is-visible' : ''}`} 
          style={{ '--delay': '480ms', '--reveal-translate': '10px' }}
        >
          <div className="avatar-stack">
            <img src="https://img.magnific.com/free-photo/two-colleagues-working-laptop_114579-2814.jpg?semt=ais_hybrid&w=740&q=80" alt="Indian student" />
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80" alt="Indian learner" />
            <img src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=120&q=80" alt="Indian mentor" />
          </div>
          <div><strong>50k+</strong><span>Students learning with us</span></div>
        </div>
      </div>
      <div 
        className={`hero-visual reveal-item ${isMounted ? 'is-visible' : ''}`} 
        style={{ '--delay': '560ms', '--reveal-scale': '0.95' }} 
        aria-label="Indian student learning online"
      >
        <div className="feature-card top-left"><Video size={22} /><strong>Live Classes</strong><span>Learn in real time</span></div>
        <div className="feature-card top-right"><UsersRound size={22} /><strong>Expert Mentors</strong><span>Doubt help</span></div>
        <div className="feature-card mid-left"><BarChart3 size={22} /><strong>Mock Tests</strong><span>Practice and improve</span></div>
        <div className="feature-card mid-right"><Star size={22} /><strong>Progress Tracking</strong><span>Track your growth</span></div>
        <img className="main-student" src="https://img.magnific.com/free-photo/two-colleagues-working-laptop_114579-2814.jpg?semt=ais_hybrid&w=740&q=80" alt="Real Indian student holding books" />
      </div>
    </section>
  );
}

