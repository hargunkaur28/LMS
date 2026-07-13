import { BarChart3, BookOpen, ClipboardCheck, Star, Target, UsersRound } from 'lucide-react';
import TiltedCard from './TiltedCard';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function WhyChoose() {
  const { t } = useLanguage();

  const items = [
    { Icon: Target, title: t('whyChoose.card1Title'), text: t('whyChoose.card1Text') },
    { Icon: UsersRound, title: t('whyChoose.card2Title'), text: t('whyChoose.card2Text') },
    { Icon: BarChart3, title: t('whyChoose.card3Title'), text: t('whyChoose.card3Text') },
    { Icon: BookOpen, title: t('whyChoose.card4Title'), text: t('whyChoose.card4Text') },
    { Icon: ClipboardCheck, title: t('whyChoose.card5Title'), text: t('whyChoose.card5Text') },
    { Icon: Star, title: t('whyChoose.card6Title'), text: t('whyChoose.card6Text') }
  ];

  return (
    <section className="why" id="about">
      <span className="section-kicker">{t('whyChoose.kicker')}</span>
      <h2>{t('whyChoose.heading')}</h2>
      <p className="section-intro">{t('whyChoose.intro')}</p>
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
