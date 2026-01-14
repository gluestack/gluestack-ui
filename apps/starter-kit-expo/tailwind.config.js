/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.DARK_MODE ? process.env.DARK_MODE : 'class',
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    './utils/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator|brand)$/,
    },
  ],
  theme: {
    extend: {
      // Colors are defined in global.css using CSS variables with @variant directives
      // Uniwind automatically resolves --color-* variables to utility classes
      colors: {
        typography: {
          white: '#FFFFFF',
          gray: '#D4D4D4',
          black: '#181718',
        },
        white: 'rgb(255 255 255)',
      },
      fontFamily: {
        heading: undefined,
        body: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        inter: ['var(--font-inter)'],
        georgia: ['Georgia'],
        melno: ['Melno'],
        geist: ['Geist'],
        jakarta: ['Jakarta'],
        andika: [
          'Andika_400Regular',
          'Andika_400Regular_Italic',
          'Andika_700Bold',
          'Andika_700Bold_Italic',
        ],
        outfit: [
          'Outfit_400Regular',
          'Outfit_500Medium',
          'Outfit_600SemiBold',
          'Outfit_700Bold',
          'Outfit_800ExtraBold',
          'Outfit_900Black',
        ],
        opensans: [
          'OpenSans_400Regular',
          'OpenSans_500Medium',
          'OpenSans_600SemiBold',
          'OpenSans_700Bold',
        ],
        lora: [
          'Lora_400Regular',
          'Lora_500Medium',
          'Lora_600SemiBold',
          'Lora_700Bold',
        ],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        DEFAULT: 'var(--radius)',
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
    },
  },
};
