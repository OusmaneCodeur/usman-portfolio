export default function SkillCard({ icon: Icon, title, description, tools = [] }) {
  return (
    <article className="card skill-card reveal">
      <span className="skill-card__icon"><Icon /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
    </article>
  );
}
