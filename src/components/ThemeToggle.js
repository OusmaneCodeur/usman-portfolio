import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button className="icon-btn" onClick={onToggle} aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"} title="Changer de thème">
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
