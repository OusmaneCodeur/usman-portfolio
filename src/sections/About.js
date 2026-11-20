import { FiMapPin, FiCode, FiMonitor, FiTarget, FiDownload } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import profile from "../data/profile";

const infos = [
  [FiMapPin, "Localisation", "Dakar, Sénégal"],
  [FiCode, "Spécialité", "Développement Web"],
  [FiMonitor, "Domaine complémentaire", "Référent Digital"],
  [FiTarget, "Objectif", "Opportunités professionnelles et collaborations freelance"],
];

export default function About() {
  return (
    <section id="apropos" className="section section--dark">
      <div className="container about__grid">
        <div className="reveal">
          <SectionTitle eyebrow="À propos" title="Derrière les idées, une passion pour le digital." />
          <p>Je suis Ousmane DIENG, Développeur Web et Référent Digital basé à Guédiawaye, Dakar.</p>
          <p>Mon parcours associe le développement d'applications web et mobiles, le design graphique, la communication digitale et la gestion de projets numériques.</p>
          <p>Mes différentes formations et mes projets personnels et académiques m'ont permis de développer une vision polyvalente du numérique.</p>
          <p>J'aime comprendre les besoins, imaginer des solutions, concevoir des interfaces et participer à la réalisation de projets qui répondent à des problématiques concrètes.</p>
          <p>Ma démarche repose sur la créativité, la rigueur, l'analyse et l'envie d'apprendre continuellement.</p>
          <Button href={profile.cv} download icon={<FiDownload />}>Télécharger mon CV</Button>
        </div>
        <div className="about__infos">
          {infos.map(([Icon, label, value]) => (
            <div key={label} className="card info-card reveal">
              <Icon />
              <span className="muted">{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
