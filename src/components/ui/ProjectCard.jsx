import './ProjectCard.css';

export default function ProjectCard({ title, description, tags, badge, url, visitLabel }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__footer">
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-card__link">
            {visitLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
