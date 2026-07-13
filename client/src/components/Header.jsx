import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';

export default function Header({ mobileOpen, setMobileOpen }) {
  const nav = ['Home', 'Courses', 'Mentors', 'Success Stories', 'Pricing', 'About'];

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' }
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#">LMS</a>
      <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}>
        <Menu size={22} />
      </button>
      <div className="desktop-nav-wrapper">
        <GooeyNav items={navItems} />
      </div>
      <div className="header-actions">
        <button className="ghost-button">Log In</button>
        <button className="primary-button">Get Started</button>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <button className="icon-button close-button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <X size={22} />
          </button>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
