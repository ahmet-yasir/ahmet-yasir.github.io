import { useTranslation } from 'react-i18next';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Ahmet Yasir Kulaksız</p>
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">{t('hero.cta_projects')}</a>
            <a href="#contact" className="btn btn-outline">{t('hero.cta_contact')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
