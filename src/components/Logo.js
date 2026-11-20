import profile from "../data/profile";

// Affiche le logo adapté au thème (clair/sombre) ; "forceDark" pour les fonds toujours sombres.
export default function Logo({ forceDark = false }) {
  return (
    <span className="logo">
      {!forceDark && <img className="logo-light" src={profile.logoLight} alt="USMAN – Digital Geek" />}
      <img className={forceDark ? "" : "logo-dark"} src={profile.logoDark} alt={forceDark ? "USMAN – Digital Geek" : ""} aria-hidden={!forceDark} />
    </span>
  );
}
