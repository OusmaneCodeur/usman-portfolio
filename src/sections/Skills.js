import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="container">
        <SectionTitle eyebrow="Compétences" title="Un profil polyvalent, des compétences complémentaires." subtitle="Je combine des compétences techniques et créatives pour accompagner les projets digitaux de la conception à la réalisation." />
        <div className="grid grid--3">
          {skills.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
