import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["accueil", "Accueil"],
  ["apropos", "À propos"],
  ["competences", "Compétences"],
  ["projets", "Projets"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#accueil" aria-label="Retour à l'accueil" onClick={() => setOpen(false)}><Logo /></a>
        <nav id="main-nav" className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Navigation principale">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="icon-btn navbar__burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
