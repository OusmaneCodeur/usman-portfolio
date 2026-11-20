import { FiMapPin, FiArrowRight, FiMail } from "react-icons/fi";
import Button from "../components/Button";
import Socials from "../components/Socials";
import profile from "../data/profile";

const base = process.env.PUBLIC_URL || "";

export default function Hero() {
  return (
    <section id="accueil" className="section hero" style={{ "--hero-watermark": `url("${base}/images/FauconPèlerin.png")` }}>
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow anim anim-1">Bonjour, je suis</span>
          <h1 className="anim anim-2">{profile.name}</h1>
          <p className="hero__role anim anim-3">{profile.role}</p>
          <p className="hero__intro anim anim-3">
            Je transforme les idées en expériences digitales. Entre développement web, design et communication digitale, je conçois des solutions qui allient créativité, technique et impact.
          </p>
          <div className="hero__cta anim anim-4">
            <Button href="#projets" icon={<FiArrowRight />}>Découvrir mes projets</Button>
            <Button href="#contact" variant="outline" icon={<FiMail />}>Me contacter</Button>
          </div>
          <div className="hero__meta anim anim-4">
            <Socials />
            <span><FiMapPin /> Basé à Dakar, Sénégal</span>
          </div>
        </div>
        <div className="hero__photo anim anim-photo">
          <div className="hero__frame">
            <img src={profile.photo} alt={`Portrait de ${profile.name}`} width="480" height="600" />
          </div>
        </div>
      </div>
    </section>
  );
}
