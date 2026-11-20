import { FiMapPin } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

export default function Education() {
  return (
    <section id="parcours" className="section section--dark">
      <div className="container">
        <SectionTitle eyebrow="Parcours" title="Mon parcours, une évolution continue." />
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.title} className="timeline__item reveal">
              <span className="timeline__period">{e.period}</span>
              <h3>{e.title}</h3>
              <p className="timeline__school">{e.school}</p>
              <p className="muted"><FiMapPin /> {e.place}</p>
              {e.description && <p>{e.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
