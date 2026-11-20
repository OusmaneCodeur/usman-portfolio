const base = process.env.PUBLIC_URL || "";

const profile = {
  name: "Ousmane DIENG",
  role: "Développeur Web & Référent Digital",
  email: "ousdieng018@gmail.com",
  phone: "+221 77 866 70 02",
  location: "Guédiawaye, Dakar, Sénégal",
  // Liens à remplacer par vos vraies URL (laisser "" masque l'icône)
  github: "https://github.com/OusmaneCodeur",
  linkedin: "https://www.linkedin.com/in/ousmane-dieng-2a43a5357/",
  cv: `${base}/CVOusmaneDieng.pdf`,
  photo: `${base}/images/ousprofile.jpeg`,
  logoLight: `${base}/images/logolight.png`, // logo pour fond clair
  logoDark: `${base}/images/logodark.png`, // logo pour fond sombre
};

export default profile;
