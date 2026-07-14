import { Mic, Sprout, Bot, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import ScrollReveal from './ScrollReveal.jsx';
import './AIForLearning.css';

export default function AIForLearning() {
  const { t } = useLanguage();

  /** Wrap every occurrence of "Sarvam AI" in a highlight span */
  const highlightSarvam = (text) => {
    const keyword = 'Sarvam AI';
    const idx = text.indexOf(keyword);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="ai-highlight-sarvam">{keyword}</span>
        {text.slice(idx + keyword.length)}
      </>
    );
  };

  const points = [
    { Icon: Mic,      titleKey: 'aiForLearning.card1Title', textKey: 'aiForLearning.card1Text' },
    { Icon: Sprout,   titleKey: 'aiForLearning.card2Title', textKey: 'aiForLearning.card2Text' },
    { Icon: Bot,      titleKey: 'aiForLearning.card3Title', textKey: 'aiForLearning.card3Text' },
    { Icon: FileText, titleKey: 'aiForLearning.card4Title', textKey: 'aiForLearning.card4Text' },
  ];

  return (
    <section className="ai-for-learning" id="ai-for-learning">
      <div className="ai-for-learning-inner">
        <div className="ai-two-col">


          {/* ── Left column: text ── */}
          <div className="ai-text-col">
            <ScrollReveal>
              <div className="ai-kicker-row">
                <div className="ai-tricolor-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="ai-kicker-text">{t('aiForLearning.kicker')}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>{t('aiForLearning.heading')}</h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="ai-for-learning-sub">{t('aiForLearning.subheading')}</p>
            </ScrollReveal>

            {/* Compact icon list */}
            <ul className="ai-point-list">
              {points.map(({ Icon, titleKey, textKey }, i) => {
                const title = t(titleKey);
                const desc = t(textKey);
                return (
                  <ScrollReveal key={titleKey} delay={300 + i * 100}>
                    <li className="ai-point-item">
                      <div className="ai-point-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div className="ai-point-text">
                        <h3>{highlightSarvam(title)}</h3>
                        <p>{highlightSarvam(desc)}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                );
              })}
            </ul>

          </div>

          {/* ── Right column: overlapping photos ── */}
          <ScrollReveal delay={350} className="ai-photo-col">
            <div className="ai-photo-stack">
              <div className="ai-photo ai-photo-primary" aria-label="Rural Indian student engaged in learning">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/09/20/Pictures/hindustan-chokhandi-september-computer-september-students-learning_d5176eee-7f5d-11e6-a0d9-e435f3f63e15.jpg"
                  alt="Rural Indian students learning on computers"
                />
              </div>

              <div className="ai-photo ai-photo-secondary" aria-label="Rural Indian teacher or parent supporting learning">
                <img
                  src="https://villagesquare.in/wp-content/uploads/2017/10/Computers1.jpg"
                  alt="Students learning together in rural school classroom"
                />
              </div>

              {/* Decorative accent doodle */}
              <svg className="ai-doodle-star" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M20 2l4.5 13.8H39l-11.7 8.5 4.5 13.8L20 29.6 8.2 38.1l4.5-13.8L1 15.8h14.5z" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
