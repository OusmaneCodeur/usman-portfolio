import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section section--black">
      <div className="container contact__grid">
        <div>
          <SectionTitle eyebrow="Contact" title="Vous avez un projet en tête ?" subtitle="Une idée, une collaboration ou une opportunité professionnelle ? Discutons ensemble de la manière dont nous pouvons donner vie à vos projets." />
          <ul className="contact__list reveal">
            <li><FiMail /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><FiPhone /><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><FiMapPin /><span>{profile.location}</span></li>
          </ul>
          <Socials />
        </div>
        <div className="card reveal"><ContactForm /></div>
      </div>
    </section>
  );
}
