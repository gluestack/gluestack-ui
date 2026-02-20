const sharedConfig = require('@repo/tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,jsx,ts,tsx}',
  ],
};
