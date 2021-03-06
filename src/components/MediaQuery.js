const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  wide: "1200px",
  large: "1500px",
  xl: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  wide: `(min-width: ${size.wide})`,
  large: `(min-width: ${size.large})`,
  xl: `(min-width: ${size.xl})`,
}

export const maxDevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  wide: `(max-width: ${size.wide})`,
  large: `(max-width: ${size.large})`,
  xl: `(max-width: ${size.xl})`,
}
