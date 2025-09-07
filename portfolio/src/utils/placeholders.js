// Utility functions for generating placeholder images

export const generatePlaceholderSVG = (
  width,
  height,
  text,
  bgColor = "#112240",
  textColor = "#64ffda"
) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle" dy=".35em" fill="${textColor}">
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const generateProfilePlaceholder = (initial, size = 300) => {
  return generatePlaceholderSVG(size, size, initial, "#0a192f", "#64ffda");
};

export const generateProjectPlaceholder = (
  title,
  width = 600,
  height = 300
) => {
  return generatePlaceholderSVG(width, height, title, "#112240", "#64ffda");
};
