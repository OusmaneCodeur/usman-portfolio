//import { placeholder } from "../utils/placeholder";

export const filters = ["Tous", "Développement Web", "UI/UX Design", "Branding", "Communication digitale"];

// Remplacez le champ "image" par vos vraies captures : process.env.PUBLIC_URL + "/images/mon-image.png"
const projects = [
  {
    id: "oneplace", title: "OnePlace", categories: ["Développement Web"], categoryLabel: "Développement Web",
    image: process.env.PUBLIC_URL + "/images/OnePlace.png",
    description: "Plateforme e-commerce inspirée des marketplaces modernes : découvrir, consulter et acheter différents produits en ligne.",
    details: "OnePlace est une plateforme e-commerce inspirée des marketplaces modernes. Le projet consiste à concevoir une solution permettant aux utilisateurs de découvrir, consulter et acheter différents produits en ligne. La plateforme intègre plusieurs fonctionnalités essentielles d'une expérience e-commerce : authentification des utilisateurs, gestion des produits, panier, commandes et administration.",
    contribution: ["Conception et développement de la plateforme, intégration des interfaces et participation à la mise en place des fonctionnalités principales."],
    tech: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    //links: { demo: "https://example.com/demo/oneplace", github: "https://github.com/votre-compte/oneplace" },
  },
  {
    id: "gameflow", title: "GameFlow", categories: ["Branding"], categoryLabel: "Design graphique et projet digital",
    image: process.env.PUBLIC_URL + "/images/GameFlow.jpeg",
    description: "Solution digitale imaginée pour accompagner les visiteurs et participants des Jeux Olympiques de la Jeunesse Dakar 2026.",
    details: "GameFlow est un projet de solution digitale imaginé pour accompagner les visiteurs et participants des Jeux Olympiques de la Jeunesse Dakar 2026. L'objectif est de proposer une expérience numérique facilitant l'accès aux informations et aux différents services liés à l'événement.",
    contribution: ["Participation à la conception de l'identité visuelle.", "Création des supports de communication.", "Design graphique.", "Collaboration en équipe.", "Organisation et suivi des tâches selon une approche agile."],
    tech: ["Outils de design graphique", "Outils collaboratifs et de gestion de projet"],
    //links: { demo: "https://example.com/demo/gameflow", github: "https://github.com/votre-compte/gameflow" },
  },
  {
    id: "toktok", title: "TOKTOK", categories: ["Branding"], categoryLabel: "Branding et design graphique",
    image: process.env.PUBLIC_URL + "/images/toktok.jpg",
    description: "Concept fictif de plateforme de restauration digitale, avec une identité visuelle complète déclinée sur plusieurs supports.",
    details: "TOKTOK est un concept fictif de plateforme de restauration digitale pour lequel j'ai réalisé une identité visuelle complète. Le travail a porté sur la création d'un univers graphique cohérent et son adaptation à différents supports de communication.",
    contribution: ["Conception du logo.", "Création du moodboard.", "Définition de la charte graphique.", "Création de l'icône d'application.", "Conception de cartes de visite.", "Création de supports pour les réseaux sociaux."],
    tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    //links: { demo: "https://example.com/demo/toktok", github: "https://github.com/votre-compte/toktok" },
  },
  {
    id: "xelcom", title: "Xel'Com", categories: ["Communication digitale", "Branding"], categoryLabel: "Communication digitale et branding",
    image: process.env.PUBLIC_URL + "/images/LogoXel'Com.jpg",
    description: "Projet d'agence de communication digitale : identité visuelle et présence sur les réseaux sociaux pensées pour la cohérence et la visibilité.",
    details: "Xel'Com est un projet d'agence de communication digitale dont l'identité visuelle et la présence sur les réseaux sociaux ont été conçues dans une logique de cohérence et de visibilité de marque.",
    contribution: ["Conception de l'identité visuelle.", "Création du logo.", "Définition de la ligne éditoriale.", "Élaboration d'une stratégie de communication.", "Planification des publications.", "Création de contenus.", "Animation et gestion des communautés."],
    tech: ["Adobe Illustrator", "Canva", "Meta Business Suite", "Agorapulse", "Brand24"],
    //links: { demo: "https://example.com/demo/xelcom", github: "https://github.com/votre-compte/xelcom" },
  },
  {
    id: "qrcode", title: "QR Code Generator", categories: ["Développement Web"], categoryLabel: "Développement Web",
    image: process.env.PUBLIC_URL + "/images/QRCode.png",
    description: "Application web qui génère rapidement des QR codes à partir du contenu saisi par l'utilisateur.",
    details: "QR Code Generator est une application web permettant de générer rapidement des QR codes à partir d'informations saisies par l'utilisateur. Le projet a été conçu pour proposer une interface simple, intuitive et accessible, permettant de transformer facilement un contenu en QR code.",
    features: ["Saisie du contenu à convertir.", "Génération dynamique du QR code.", "Affichage du QR code généré.", "Interface simple et responsive."],
    contribution: ["Conception de l'interface et développement de la logique de génération du QR code."],
    tech: ["HTML5", "CSS3", "JavaScript"],
    links: { demo: "https://code-qr-fwcnq6vlc-ousmane-diengs-projects.vercel.app/", github: "https://github.com/votre-compte/qrcode-generator" },
  },
  {
    id: "ndakarou", title: "Ndakarou", categories: ["UI/UX Design"], categoryLabel: "UX/UI Design et étude académique",
    image: process.env.PUBLIC_URL + "/images/ndakarou.png",
    description: "Projet académique de conception d'une solution digitale aidant à trouver des activités selon ses envies, son budget et ses disponibilités.",
    details: "Ndakarou est un projet académique de conception d'une solution digitale dont l'objectif est d'aider les jeunes et les autres personnes à trouver des activités correspondant à leurs besoins, leurs envies, leur budget et leurs disponibilités. Le projet part d'une problématique concrète : permettre aux utilisateurs de découvrir plus facilement des activités adaptées à leur situation et à leurs préférences. Il s'agit d'une étude et d'une conception UX/UI, non d'une plateforme déployée.",
    method: [
      ["Empathie", "Comprendre les utilisateurs, leurs besoins et leurs difficultés."],
      ["Définition", "Identifier et reformuler la problématique principale."],
      ["Idéation", "Explorer plusieurs pistes de solutions."],
      ["Prototypage", "Concevoir les premières interfaces et représentations de la solution."],
      ["Test", "Recueillir des retours et identifier les améliorations possibles."],
    ],
    contribution: ["Étude UX/UI, analyse de la problématique, réflexion sur les besoins utilisateurs et conception de l'expérience et des interfaces de la solution."],
    tech: ["Figma", "Design Thinking", "Recherche utilisateur", "Analyse UX", "Conception UI", "Prototypage"],
    links: { demo: "https://www.figma.com/proto/MxXnwmUYyIc3AKrFZmgz9V/Ndakarou-%E2%80%93-Interface-mobile?page-id=0%3A1&node-id=2-2&viewport=307%2C32%2C0.6&t=sjbSpfsaD81osf4f-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2", /*github: "https://github.com/votre-compte/ndakarou"*/ },
  },
  
];

export default projects;
