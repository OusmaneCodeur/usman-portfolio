import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";
import useReveal from "./hooks/useReveal";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  useReveal();

  return (
    <>
      <a href="#accueil" className="skip-link">Aller au contenu</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
