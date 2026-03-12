import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import './Publications.css';

export default function Publications() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="publications" className="section--surface">
      <h2 className="section-heading">{t('publications.heading')}</h2>
      <div className="publication-card">
        <div className="publication-card__type">{t('publications.type')}</div>
        <h3 className="publication-card__title">"{t('publications.paper_title')}"</h3>
        <p className="publication-card__meta">
          <span className="publication-card__conf">{t('publications.conference')}</span>
          <span className="publication-card__year">{t('publications.year')}</span>
        </p>
        <p className="publication-card__support">{t('publications.support')}</p>
      </div>
    </SectionWrapper>
  );
}
