import Button from "./Button";
import { FiExternalLink } from "react-icons/fi";
import { FaFigma, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, onOpen }) {
  const tech = project.tech || [];
  const links = project.links || {};
  const resources = [
    { key: "demo", label: "Démonstration", Icon: FiExternalLink },
    { key: "figma", label: "Figma", Icon: FaFigma },
    { key: "github", label: "GitHub", Icon: FaGithub },
  ].filter(({ key }) => links[key]);

  return (
    <article className="card project-card">
      <div className="project-card__img">
        <img src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" width="800" height="500" style={{ objectPosition: project.imagePosition || "center" }} />
      </div>
      <div className="project-card__body">
        <span className="eyebrow">{project.categoryLabel}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="project-card__actions">
          <Button variant="outline" onClick={() => onOpen(project)}>Voir les détails</Button>
          {resources.length > 0 && (
            <div className="project-card__links" aria-label={`Ressources du projet ${project.title}`}>
              {resources.map(({ key, label, Icon }) => (
                <a key={key} className="icon-btn project-card__link" href={links[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
