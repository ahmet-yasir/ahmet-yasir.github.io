import './ProjectCard.css';

export default function ProjectCard({ title, description, tags, badge, githubLabel }) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="pill">{tag}</span>
        ))}
      </div>
    </div>
  );
}
