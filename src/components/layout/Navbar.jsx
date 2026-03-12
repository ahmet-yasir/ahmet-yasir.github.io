import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  const navLinks = [
    { key: 'about', href: '#about' },
    { key: 'education', href: '#education' },
    { key: 'projects', href: '#projects' },
    { key: 'publications', href: '#publications' },
    { key: 'certifications', href: '#certifications' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand">{t('nav.home')}</a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a href={href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__lang" onClick={toggleLang} aria-label="Toggle language">
            {i18n.language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
