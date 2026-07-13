import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section className="cta">
      <div className="cta-visual">
        <span className="cta-dot top-dot"></span>
        <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=520&q=85" alt="Indian student with backpack" />
        <span className="cta-dot bottom-dot"></span>
      </div>
      <div>
        <h2>{t('cta.heading')}</h2>
        <p>{t('cta.description')}</p>
      </div>
      <a className="secondary-button large" href="#courses">{t('cta.button')} <ArrowRight size={17} /></a>
    </section>
  );
}
