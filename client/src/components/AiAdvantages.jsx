import React from 'react';
import './AiAdvantages.css';
import { Target, Search, BookOpen, Languages, Globe, Mic, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import ScrollReveal from './ScrollReveal.jsx';

export default function AiAdvantages() {
  const { t } = useLanguage();

  const steps = [
    { id: 1, text: t('aiRoadmap.step1'), icon: Target, top: true },
    { id: 2, text: t('aiRoadmap.step2'), icon: Search, top: false },
    { id: 3, text: t('aiRoadmap.step3'), icon: BookOpen, top: true },
    { id: 4, text: t('aiRoadmap.step4'), icon: Languages, top: false },
    { id: 5, text: t('aiRoadmap.step5'), icon: Globe, top: true },
    { id: 6, text: t('aiRoadmap.step6'), icon: Mic, top: false },
    { id: 7, text: t('aiRoadmap.step7'), icon: TrendingUp, top: true },
  ];

  return (
    <section className="ai-roadmap-section">
      <div className="roadmap-top-curve"></div>
      
      <div className="roadmap-container">
        <ScrollReveal><h2 className="roadmap-title">{t('aiRoadmap.title')}</h2></ScrollReveal>
        
        <div className="roadmap-timeline-wrapper">
          <div className="roadmap-timeline-line"></div>
          
          <div className="roadmap-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className={`roadmap-step-container ${step.top ? 'text-top' : 'text-bottom'}`}>
                  {step.top && (
                    <ScrollReveal 
                      className="roadmap-text-box top-text"
                      delay={index * 400 + 200}
                    >
                      {step.text}
                      <div className="dotted-connector top-connector"></div>
                    </ScrollReveal>
                  )}
                  
                  <ScrollReveal 
                    className="roadmap-circle"
                    delay={index * 400}
                  >
                    <div className="roadmap-inner-circle">
                      <Icon size={28} color="#fff" strokeWidth={1.5} />
                    </div>
                  </ScrollReveal>
                  
                  {!step.top && (
                    <ScrollReveal 
                      className="roadmap-text-box bottom-text"
                      delay={index * 400 + 200}
                    >
                      <div className="dotted-connector bottom-connector"></div>
                      {step.text}
                    </ScrollReveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={8 * 400}>
          <h3 className="roadmap-subtitle">{t('aiRoadmap.subtitle')}</h3>
        </ScrollReveal>
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
