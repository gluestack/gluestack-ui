import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
// import tailwindConfig from '@/tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindConfigBreakpoints = () => {
  const breakpoints = fullConfig.theme.screens;
  return {
    'base': 0,
    'sm': parseInt(breakpoints.sm, 10),
    'md': parseInt(breakpoints.md, 10),
    'lg': parseInt(breakpoints.lg, 10),
    'xl': parseInt(breakpoints.xl, 10),
    '2xl': parseInt(breakpoints['2xl'], 10),
  };
};
