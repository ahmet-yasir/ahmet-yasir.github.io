import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import './Education.css';

export default function Education() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="education">
      <h2 className="section-heading">{t('education.heading')}</h2>
      <div className="education__timeline">
        <div className="education__item">
          <div className="education__dot" />
          <div className="education__body">
            <h3 className="education__university">{t('education.university')}</h3>
            <p className="education__degree">{t('education.degree')} · {t('education.level')}</p>
            <p className="education__period">{t('education.period')}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
