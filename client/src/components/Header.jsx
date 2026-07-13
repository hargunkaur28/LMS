import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Header({ mobileOpen, setMobileOpen }) {
  const { t, language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.courses'), href: '#courses' },
    { label: t('nav.mentors'), href: '#mentors' },
    { label: t('nav.successStories'), href: '#success-stories' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.about'), href: '#about' }
  ];

  const mobileNav = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.courses'), href: '#courses' },
    { label: t('nav.mentors'), href: '#mentors' },
    { label: t('nav.successStories'), href: '#success-stories' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.about'), href: '#about' }
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#">LMS</a>
      <div className="desktop-nav-wrapper">
        <GooeyNav items={navItems} />
      </div>
      <div className="header-actions">
        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label={t('header.langToggleLabel')}
          aria-pressed={language === 'hi'}
        >
          <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          <span className={language === 'hi' ? 'lang-active' : ''}>हि</span>
        </button>
        <button className="ghost-button">{t('header.login')}</button>
        <button className="primary-button">{t('header.getStarted')}</button>
      </div>

      <div className="mobile-header-actions">
        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label={t('header.langToggleLabel')}
          aria-pressed={language === 'hi'}
        >
          <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          <span className={language === 'hi' ? 'lang-active' : ''}>हि</span>
        </button>
        <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <button className="icon-button close-button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <X size={22} />
          </button>
          {mobileNav.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
