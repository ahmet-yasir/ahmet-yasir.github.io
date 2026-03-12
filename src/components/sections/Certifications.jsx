import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import './Certifications.css';

export default function Certifications() {
  const { t } = useTranslation();
  const items = t('certifications.items', { returnObjects: true });

  return (
    <SectionWrapper id="certifications">
      <h2 className="section-heading">{t('certifications.heading')}</h2>
      <ul className="cert-list">
        {items.map((cert) => (
          <li key={cert.name} className="cert-item">
            <div className="cert-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="cert-body">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-meta">{cert.issuer} · {cert.year}</span>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
