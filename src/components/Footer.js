import { FiArrowUp } from "react-icons/fi";
import Logo from "./Logo";
import Socials from "./Socials";
import profile from "../data/profile";

const links = [["accueil", "Accueil"], ["apropos", "À propos"], ["competences", "Compétences"], ["projets", "Projets"], ["parcours", "Parcours"], ["contact", "Contact"]];

export default function Footer() {
  return (
    <footer className="section section--black footer">
      <div className="container footer__grid">
        <div>
          <Logo forceDark height={44} />
          <p className="footer__name">{profile.name}</p>
          <p className="muted">{profile.role}</p>
          <p className="footer__quote">« Créativité, précision et vision au service du digital. »</p>
        </div>
        <nav aria-label="Liens du pied de page" className="footer__links">
          {links.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}
        </nav>
        <div>
          <a href={`mailto:${profile.email}`} className="footer__mail">{profile.email}</a>
          <Socials />
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 USMAN – Digital Geek. Tous droits réservés.</p>
        <a className="icon-btn" href="#accueil" aria-label="Retour en haut de la page"><FiArrowUp /></a>
      </div>
    </footer>
  );
}
