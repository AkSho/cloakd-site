/**
 * Design tokens — single source of truth for JS/TS usage.
 * CSS custom properties in global.css are the canonical source;
 * these mirror them for use in React components and Framer Motion.
 */

export const colors = {
  soil: {
    950: '#0d0b08',
    900: '#1a1610',
    800: '#2e2820',
    700: '#3d3528',
  },
  bone: {
    50:  '#faf8f4',
    100: '#f2ede3',
    200: '#e4dccb',
  },
  rust: {
    400: '#c96a3a',
    500: '#b85530',
    600: '#9e4224',
  },
  sage: {
    400: '#7aab7e',
    500: '#5e9263',
    600: '#4a7a4f',
  },
  amber: {
    400: '#d4a843',
    500: '#c09530',
  },
} as const;

export const spring = {
  default: { type: 'spring', stiffness: 300, damping: 30 },
  slow:    { type: 'spring', stiffness: 180, damping: 24 },
  snappy:  { type: 'spring', stiffness: 420, damping: 36 },
} as const;

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
} as const;
