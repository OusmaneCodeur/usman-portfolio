import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects, { filters } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const shown = filter === "Tous" ? projects : projects.filter((p) => (p.categories || []).includes(filter));

  return (
    <section id="projets" className="section section--alt">
      <div className="container">
        <SectionTitle eyebrow="Projets" title="Des idées transformées en réalisations." subtitle="Découvrez une sélection de projets personnels, académiques et créatifs auxquels j'ai contribué." />
        <div className="filters reveal" role="group" aria-label="Filtrer les projets">
          {filters.map((f) => (
            <button key={f} className={`chip ${filter === f ? "chip--active" : ""}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="grid grid--3">
          {shown.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
