import { BarChart3, BookOpen, ClipboardCheck, Star, Target, UsersRound } from 'lucide-react';
import TiltedCard from './TiltedCard';

export default function WhyChoose() {
  const items = [
    {
      Icon: Target,
      title: 'Structured Pathways',
      text: 'Step-by-step learning modules mapped for school grades, JEE and NEET readiness.'
    },
    {
      Icon: UsersRound,
      title: 'Premium Mentorship',
      text: 'One-on-one guidance patterns ready for future backend scheduling and doubt rooms.'
    },
    {
      Icon: BarChart3,
      title: 'Deep Analytics',
      text: 'Progress states and quiz results are kept client-side now and can move to APIs later.'
    },
    {
      Icon: BookOpen,
      title: 'Smart Learning',
      text: 'YouTube lessons, notes, quizzes and mock-test style practice in one front-end flow.'
    },
    {
      Icon: ClipboardCheck,
      title: 'Practice & Assess',
      text: 'Course detail pages include subject-specific quizzes with instant scoring.'
    },
    {
      Icon: Star,
      title: 'Achieve & Excel',
      text: 'Built for Nursery to 12th, foundation batches, JEE Main/Advanced and NEET UG aspirants.'
    }
  ];

  return (
    <section className="why" id="about">
      <span className="section-kicker">Why Choose LMS</span>
      <h2>Everything a student needs in one place</h2>
      <p className="section-intro">Discover tools and guidance that make learning more focused, trackable and enjoyable.</p>
      <div className="feature-grid">
        {items.map(({ Icon, title, text }) => (
          <TiltedCard
            key={title}
            altText={title}
            captionText={title}
            containerHeight="170px"
            containerWidth="100%"
            imageHeight="170px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="why-card-overlay">
                <div className="why-card-icon">
                  <Icon size={24} />
                </div>
                <div className="why-card-text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
