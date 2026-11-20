import { useState } from "react";
import Button from "./Button";
import { FiSend } from "react-icons/fi";

const FORM_ID = (process.env.REACT_APP_FORMSPREE_ID || "").trim();
const empty = { name: "", email: "", subject: "", message: "" };
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [feedback, setFeedback] = useState("");

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const validate = () => {
    const err = {};
    if (!values.name.trim()) err.name = "Veuillez saisir votre nom.";
    if (!values.email.trim()) err.email = "Veuillez saisir votre email.";
    else if (!emailOk(values.email)) err.email = "Format d'email invalide.";
    if (!values.subject.trim()) err.subject = "Veuillez saisir un sujet.";
    if (!values.message.trim()) err.message = "Veuillez écrire votre message.";
    return err;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    if (!FORM_ID) {
      setStatus("error");
      setFeedback("Le formulaire n'est pas encore configuré. Écrivez-moi directement par email.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("success");
      setFeedback("Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.");
      setValues(empty);
    } catch (error) {
      setStatus("error");
      setFeedback("Une erreur est survenue : votre message n'a pas pu être envoyé. Réessayez ou écrivez-moi par email.");
    }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.textarea ? (
        <textarea id={name} name={name} rows="5" value={values[name]} onChange={change} aria-invalid={!!errors[name]} />
      ) : (
        <input id={name} name={name} type={props.type || "text"} value={values[name]} onChange={change} aria-invalid={!!errors[name]} />
      )}
      {errors[name] && <span className="field__error" role="alert">{errors[name]}</span>}
    </div>
  );

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {field("name", "Nom complet")}
      {field("email", "Adresse email", { type: "email" })}
      {field("subject", "Sujet")}
      {field("message", "Message", { textarea: true })}
      <Button type="submit" disabled={status === "loading"} icon={<FiSend />}>
        {status === "loading" ? "Envoi en cours…" : "Envoyer mon message"}
      </Button>
      {(status === "success" || status === "error") && (
        <p className={`form-msg form-msg--${status}`} role="status">{feedback}</p>
      )}
    </form>
  );
}
