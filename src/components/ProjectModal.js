import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  const features = project.features || [];
  const method = project.method || [];
  const contribution = project.contribution || [];
  const tech = project.tech || [];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal__close" onClick={onClose} aria-label="Fermer" autoFocus><FiX /></button>
        <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
        <div className="modal__content">
          <span className="eyebrow">{project.categoryLabel}</span>
          <h3 id="modal-title">{project.title}</h3>
          <p>{project.details}</p>
          {project.features && (<><h4>Fonctionnalités</h4><ul className="list">{features.map((f) => <li key={f}>{f}</li>)}</ul></>)}
          {project.method && (
            <>
              <h4>Méthodologie : Design Thinking</h4>
              <ol className="steps">{method.map(([t, d]) => <li key={t}><strong>{t}</strong> : {d}</li>)}</ol>
            </>
          )}
          <h4>Ma contribution</h4>
          <ul className="list">{contribution.map((c) => <li key={c}>{c}</li>)}</ul>
          <h4>Technologies et outils</h4>
          <ul className="tags">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
