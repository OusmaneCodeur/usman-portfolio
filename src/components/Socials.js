import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../data/profile";

// Les icônes ne s'affichent que si une vraie URL est renseignée dans data/profile.js
export default function Socials() {
  const items = [
    { url: profile.github, label: "GitHub", Icon: FaGithub },
    { url: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  ].filter((i) => i.url);
  if (!items.length) return null;
  return (
    <div className="socials">
      {items.map(({ url, label, Icon }) => (
        <a key={label} className="icon-btn" href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon /></a>
      ))}
    </div>
  );
}
