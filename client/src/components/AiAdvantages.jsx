import React from 'react';
import './AiAdvantages.css';
import { Target, Search, BookOpen, Languages, Globe, Mic, TrendingUp } from 'lucide-react';

const steps = [
  { id: 1, text: 'Set your learning goals', icon: Target, top: true },
  { id: 2, text: 'Smart day-by-day topic search', icon: Search, top: false },
  { id: 3, text: 'Personalized study modules', icon: BookOpen, top: true },
  { id: 4, text: 'Seamlessly switch to Hindi', icon: Languages, top: false },
  { id: 5, text: 'Learn in your preferred language', icon: Globe, top: true },
  { id: 6, text: 'Listen with voice recognition', icon: Mic, top: false },
  { id: 7, text: 'Track your growth with AI', icon: TrendingUp, top: true },
];

export default function AiAdvantages() {
  return (
    <section className="ai-roadmap-section">
      <div className="roadmap-top-curve"></div>
      
      <div className="roadmap-container">
        <h2 className="roadmap-title">AI Powered Learning in 2026:</h2>
        
        <div className="roadmap-timeline-wrapper">
          <div className="roadmap-timeline-line"></div>
          
          <div className="roadmap-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className={`roadmap-step-container ${step.top ? 'text-top' : 'text-bottom'}`}>
                  {step.top && (
                    <div className="roadmap-text-box top-text">
                      {step.text}
                      <div className="dotted-connector top-connector"></div>
                    </div>
                  )}
                  
                  <div className="roadmap-circle">
                    <div className="roadmap-inner-circle">
                      <Icon size={28} color="#fff" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {!step.top && (
                    <div className="roadmap-text-box bottom-text">
                      <div className="dotted-connector bottom-connector"></div>
                      {step.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <h3 className="roadmap-subtitle">A Step-by-Step Guide to Smarter Learning</h3>
      </div>

      <div className="roadmap-bottom-curve"></div>
      <div className="roadmap-dots-decor">
        <div className="dots-grid">
           {Array.from({length: 18}).map((_, i) => <div key={i} className="dot"></div>)}
        </div>
      </div>
    </section>
  );
}
