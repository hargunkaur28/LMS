import { Menu, X } from 'lucide-react';

export default function Header({ mobileOpen, setMobileOpen }) {
  const nav = ['Home', 'Courses', 'Mentors', 'Success Stories', 'Pricing', 'About'];

  return (
    <header className="site-header">
      <a className="brand" href="#">LMS</a>
      <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}>
        <Menu size={22} />
      </button>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <a key={item} className={item === 'Home' ? 'active' : ''} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
            {item}
          </a>
        ))}
      </nav>
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
