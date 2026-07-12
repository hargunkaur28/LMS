import { useState } from 'react';
import { CheckCircle2, ChevronLeft, PlayCircle } from 'lucide-react';
import Footer from './Footer.jsx';

export default function CourseDetail({ course, onBack }) {
  const [answers, setAnswers] = useState({});
  const score = course.quiz.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0);
  const attempted = Object.keys(answers).length;

  return (
    <main>
      <header className="detail-header">
        <button className="back-button" onClick={onBack}><ChevronLeft size={18} /> Back to courses</button>
        <a className="brand" href="#" onClick={onBack}>LMS</a>
      </header>
      <section className="detail-hero">
        <img src={course.image} alt={course.imageAlt} />
        <div>
          <p className="provider">{course.provider} YouTube Course</p>
          <h1>{course.title}</h1>
          <p>{course.longDescription}</p>
          <div className="detail-tags">
            {course.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a className="primary-button large" href={course.youtubeUrl} target="_blank" rel="noreferrer">
            Open on YouTube <PlayCircle size={18} />
          </a>
        </div>
      </section>
      <section className="detail-content">
        <aside className="course-outline">
          <h2>Learning Path</h2>
          {course.modules.map((module) => (
            <div className="module-item" key={module}>
              <CheckCircle2 size={18} />
              <span>{module}</span>
            </div>
          ))}
          <div className="backend-note">
            <strong>Backend-ready scope</strong>
            <p>Course, quiz, answer and progress objects are isolated in data structures so APIs can replace them later.</p>
          </div>
        </aside>
        <section className="quiz-panel">
          <div className="quiz-heading">
            <div>
              <span className="section-kicker">Real Practice Quiz</span>
              <h2>{course.quizTitle}</h2>
            </div>
            <div className="score-box">
              <strong>{score}/{course.quiz.length}</strong>
              <span>{attempted} attempted</span>
            </div>
          </div>
          {course.quiz.map((question, index) => (
            <article className="question-card" key={question.id}>
              <h3>{index + 1}. {question.prompt}</h3>
              <div className="option-grid">
                {question.options.map((option) => {
                  const picked = answers[question.id] === option;
                  const showCorrect = answers[question.id] && option === question.answer;
                  return (
                    <button
                      className={`option-button ${picked ? 'picked' : ''} ${showCorrect ? 'correct' : ''}`}
                      key={option}
                      onClick={() => setAnswers({ ...answers, [question.id]: option })}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {answers[question.id] && <p className="explanation">{question.explanation}</p>}
            </article>
          ))}
        </section>
      </section>
      <Footer />
    </main>
  );
}
