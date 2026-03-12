import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import './About.css';

export default function About() {
  const { t } = useTranslation();
  const skills = t('about.skills', { returnObjects: true });

  return (
    <SectionWrapper id="about">
      <h2 className="section-heading">{t('about.heading')}</h2>
      <div className="about__text">
        <p className="about__bio">{t('about.bio')}</p>
        <div className="about__skills">
          <p className="about__skills-label">{t('about.skills_label')}</p>
          <div className="about__pills">
            {skills.map((skill) => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
