import { ArrowRight } from 'lucide-react';
import { courses } from '../data/courses.js';

export default function Courses({ onSelect }) {
  return (
    <section className="courses-section" id="courses">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Our Courses</span>
          <h2>Signature Curriculums</h2>
          <p>Real YouTube-based course pathways for Indian school and entrance exam learners.</p>
        </div>
        <a href="#courses">View all courses <ArrowRight size={16} /></a>
      </div>
      <div className="marquee-container">
        <div className="marquee-track course-track">
          {[...courses, ...courses].map((course, index) => (
            <article className="course-card" key={`${course.id}-${index}`}>
              <div className="course-media">
                <img src={course.image} alt={course.imageAlt} />
                <span>{course.duration}</span>
              </div>
              <div className="course-body">
                <p className="provider">{course.provider}</p>
                <h3>{course.title}</h3>
                <p className="course-desc">{course.summary}</p>
                <button className="outline-button" onClick={() => onSelect(course.id)}>Learn More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
