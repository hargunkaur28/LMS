import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Testimonials() {
  const { t } = useLanguage();

  const cards = [
    [t('testimonials.card1Name'), t('testimonials.card1Label'), t('testimonials.card1Text'), 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'],
    [t('testimonials.card2Name'), t('testimonials.card2Label'), t('testimonials.card2Text'), 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80'],
    [t('testimonials.card3Name'), t('testimonials.card3Label'), t('testimonials.card3Text'), 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'],
    [t('testimonials.card4Name'), t('testimonials.card4Label'), t('testimonials.card4Text'), 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'],
    [t('testimonials.card5Name'), t('testimonials.card5Label'), t('testimonials.card5Text'), 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'],
    [t('testimonials.card6Name'), t('testimonials.card6Label'), t('testimonials.card6Text'), 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80']
  ];

  return (
    <section className="testimonials" id="success-stories">
      <span className="section-kicker">{t('testimonials.kicker')}</span>
      <h2>{t('testimonials.heading')}</h2>
      <div className="marquee-container">
        <div className="marquee-track testimonial-track">
          {[...cards, ...cards].map(([name, label, text, imageSrc], index) => (
            <article className="testimonial-card" key={`${name}-${index}`}>
              <Quote size={34} />
              <p>{text}</p>
              <div>
                <img src={imageSrc} alt={`${name} portrait`} />
                <span><strong>{name}</strong>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
