import { useMemo, useState } from 'react';
import { courses } from './data/courses.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Courses from './components/Courses.jsx';
import Testimonials from './components/Testimonials.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import CourseDetail from './components/CourseDetail.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId),
    [selectedCourseId]
  );

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourseId(null)} />;
  }

  return (
    <main>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal><WhyChoose /></ScrollReveal>
      <ScrollReveal><Courses onSelect={setSelectedCourseId} /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><Cta /></ScrollReveal>
      <Footer />
    </main>
  );
}
