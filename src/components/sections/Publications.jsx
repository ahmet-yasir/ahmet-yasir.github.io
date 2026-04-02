import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import './Publications.css';

export default function Publications() {
  const { t } = useTranslation();
  const items = t('publications.items', { returnObjects: true });

  return (
    <SectionWrapper id="publications" className="section--surface">
      <h2 className="section-heading">{t('publications.heading')}</h2>
      <div className="publications-list">
        {items.map((pub, i) => (
          <div className="publication-card" key={i}>
            <div className="publication-card__type">{pub.type}</div>
            <h3 className="publication-card__title">"{pub.paper_title}"</h3>
            <p className="publication-card__meta">
              <span className="publication-card__conf">{pub.conference}</span>
              <span className="publication-card__year">{pub.year}</span>
            </p>
            {pub.support && (
              <p className="publication-card__support">{pub.support}</p>
            )}
            {pub.url && (
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-card__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {t('publications.visit_label')}
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
