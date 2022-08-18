const BREAKPOINTS = {
    customPhoneMin: 490,
    tabletMin: 760,
    laptopMin: 1100,
    desktopMin: 1440,
  }

  
  export const QUERIES = {
    'customPhoneMinUp': `(min-width: ${BREAKPOINTS.customPhoneMin / 16}rem)`,
    'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  }
  