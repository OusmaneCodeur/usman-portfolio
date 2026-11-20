# Portfolio USMAN – Digital Geek

    npm i
    npm start

## À remplacer
- Logo : `public/images/logo-light.svg` / `logo-dark.svg` (fonds clair / sombre) – ou changez les chemins dans `src/data/profile.js`
- Photo : `public/images/profile-placeholder.svg` → chemin `photo` dans `src/data/profile.js`
- CV : déposez `public/cv-ousmane.pdf`
- Visuels projets : champ `image` dans `src/data/projects.js` (ex. `process.env.PUBLIC_URL + "/images/oneplace.png"`)
- Liens de projets : ajoutez uniquement les URL disponibles dans `links` (`demo`, `figma`, `github`) dans `src/data/projects.js`
- Liens GitHub / LinkedIn : `src/data/profile.js`
- Formulaire : copiez `.env.example` en `.env` et renseignez `REACT_APP_FORMSPREE_ID`, puis relancez `npm start`
