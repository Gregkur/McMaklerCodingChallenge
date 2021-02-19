// Helper for responsive widths
const size = {
  mobile: "425px",
  tablet: "768px",
  laptopS: "1024px",
  laptop: "1440px",
  desktop: "2560px",
};

export const device = {
  mobile: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
