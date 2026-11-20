// Génère une image SVG fictive (data URI) clairement indiquée comme « à remplacer ».
export const placeholder = (label, w = 800, h = 500, bg = "#171717") => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><rect width='100%' height='100%' fill='${bg}'/><rect x='20' y='20' width='${w - 40}' height='${h - 40}' fill='none' stroke='#F39200' stroke-width='2' stroke-dasharray='10 8' rx='14'/><text x='50%' y='47%' fill='#F39200' font-family='Arial' font-size='${Math.round(w / 22)}' font-weight='700' text-anchor='middle'>${label}</text><text x='50%' y='57%' fill='#999' font-family='Arial' font-size='${Math.round(w / 36)}' text-anchor='middle'>Visuel fictif à remplacer</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
