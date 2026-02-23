const sharedConfig = require('@repo/tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/components/**/*.{js,jsx,ts,tsx}',
  ],
};
