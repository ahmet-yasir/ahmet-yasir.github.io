import { useTranslation } from 'react-i18next';
import './Hero.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const cvFile = i18n.language === 'en' ? '/CV_EN.pdf' : '/CV_TR.pdf';

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Ahmet Yasir Kulaksız</p>
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__cta">
            <a href={cvFile} download className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t('hero.cta_cv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
