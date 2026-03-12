import { useTranslation } from 'react-i18next';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import './Projects.css';

export default function Projects() {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true });

  return (
    <SectionWrapper id="projects" className="projects-section">
      <h2 className="section-heading">{t('projects.heading')}</h2>
      <div className="projects__grid">
        {items.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            badge={project.badge}
            url={project.url}
            visitLabel={t('projects.visit_label')}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
