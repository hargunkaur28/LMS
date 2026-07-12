import { BarChart3, BookOpen, ClipboardCheck, Star, Target, UsersRound } from 'lucide-react';

export default function WhyChoose() {
  const items = [
    [Target, 'Structured Pathways', 'Step-by-step learning modules mapped for school grades, JEE and NEET readiness.'],
    [UsersRound, 'Premium Mentorship', 'One-on-one guidance patterns ready for future backend scheduling and doubt rooms.'],
    [BarChart3, 'Deep Analytics', 'Progress states and quiz results are kept client-side now and can move to APIs later.'],
    [BookOpen, 'Smart Learning', 'YouTube lessons, notes, quizzes and mock-test style practice in one front-end flow.'],
    [ClipboardCheck, 'Practice & Assess', 'Course detail pages include subject-specific quizzes with instant scoring.'],
    [Star, 'Achieve & Excel', 'Built for Nursery to 12th, foundation batches, JEE Main/Advanced and NEET UG aspirants.']
  ];

  return (
    <section className="why" id="about">
      <span className="section-kicker">Why Choose LMS</span>
      <h2>Everything a student needs in one place</h2>
      <p className="section-intro">Discover tools and guidance that make learning more focused, trackable and enjoyable.</p>
      <div className="feature-grid">
        {items.map(([Icon, title, text]) => (
          <article className="info-card" key={title}>
            <span><Icon size={27} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
