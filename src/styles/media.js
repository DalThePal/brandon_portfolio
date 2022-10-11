
export const breakpoints = {
  mobile: 500,
  tablet: 1024,
  desktop: 1440
}

const media = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.tablet + 1}px) and (max-width: ${breakpoints.desktop}px)`,
  fullWidth: `@media screen and (min-width: ${breakpoints.desktop + 1}px)`,
}

export default media