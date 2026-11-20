import { FiGlobe, FiStar, FiSearch, FiCheckCircle, FiLayout } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const languages = [["Français", "Courant"], ["Wolof", "Courant"], ["Anglais", "Lu et écrit"]];
const qualities = [[FiStar, "Créativité"], [FiSearch, "Esprit d'analyse"], [FiCheckCircle, "Rigueur"], [FiLayout, "Sens de l'organisation"]];

export default function Languages() {
  return (
    <section id="langues" className="section">
      <div className="container">
        <SectionTitle eyebrow="Langues & qualités" title="Ce qui me caractérise." />
        <div className="grid grid--2">
          <div className="card block reveal">
            <h3><FiGlobe /> Langues</h3>
            <ul className="plain">{languages.map(([l, n]) => <li key={l}><strong>{l}</strong><span className="muted">{n}</span></li>)}</ul>
          </div>
          <div className="card block reveal">
            <h3><FiStar /> Qualités personnelles</h3>
            <ul className="plain">{qualities.map(([Icon, q]) => <li key={q}><Icon className="accent" /><strong>{q}</strong></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
