/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.DARK_MODE ? process.env.DARK_MODE : 'class',
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    './utils/**/*.{html,js,jsx,ts,tsx,mdx}',
    './*.{html,js,jsx,ts,tsx,mdx}',
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'0': 'rgb(var(--color-primary-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-primary-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-primary-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-primary-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-primary-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-primary-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-primary-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-primary-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-primary-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-primary-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-primary-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-primary-950)/<alpha-value>)',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'0': 'rgb(var(--color-secondary-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-secondary-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-secondary-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-secondary-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-secondary-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-secondary-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-secondary-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-secondary-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-secondary-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-secondary-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-secondary-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-secondary-950)/<alpha-value>)',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: {
  				'50': 'rgb(var(--color-tertiary-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-tertiary-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-tertiary-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-tertiary-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-tertiary-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-tertiary-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-tertiary-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-tertiary-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-tertiary-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-tertiary-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-tertiary-950)/<alpha-value>)'
  			},
  			error: {
  				'0': 'rgb(var(--color-error-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-error-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-error-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-error-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-error-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-error-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-error-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-error-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-error-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-error-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-error-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-error-950)/<alpha-value>)'
  			},
  			success: {
  				'0': 'rgb(var(--color-success-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-success-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-success-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-success-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-success-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-success-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-success-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-success-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-success-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-success-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-success-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-success-950)/<alpha-value>)'
  			},
  			warning: {
  				'0': 'rgb(var(--color-warning-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-warning-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-warning-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-warning-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-warning-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-warning-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-warning-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-warning-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-warning-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-warning-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-warning-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-warning-950)/<alpha-value>)'
  			},
  			info: {
  				'0': 'rgb(var(--color-info-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-info-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-info-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-info-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-info-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-info-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-info-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-info-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-info-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-info-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-info-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-info-950)/<alpha-value>)'
  			},
  			typography: {
  				'0': 'rgb(var(--color-typography-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-typography-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-typography-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-typography-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-typography-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-typography-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-typography-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-typography-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-typography-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-typography-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-typography-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-typography-950)/<alpha-value>)',
  				white: '#FFFFFF',
  				gray: '#D4D4D4',
  				black: '#181718'
  			},
  			outline: {
  				'0': 'rgb(var(--color-outline-0)/<alpha-value>)',
  				'50': 'rgb(var(--color-outline-50)/<alpha-value>)',
  				'100': 'rgb(var(--color-outline-100)/<alpha-value>)',
  				'200': 'rgb(var(--color-outline-200)/<alpha-value>)',
  				'300': 'rgb(var(--color-outline-300)/<alpha-value>)',
  				'400': 'rgb(var(--color-outline-400)/<alpha-value>)',
  				'500': 'rgb(var(--color-outline-500)/<alpha-value>)',
  				'600': 'rgb(var(--color-outline-600)/<alpha-value>)',
  				'700': 'rgb(var(--color-outline-700)/<alpha-value>)',
  				'800': 'rgb(var(--color-outline-800)/<alpha-value>)',
  				'900': 'rgb(var(--color-outline-900)/<alpha-value>)',
  				'950': 'rgb(var(--color-outline-950)/<alpha-value>)'
  			},
  			background: 'hsl(var(--background))',
  			indicator: {
  				primary: 'rgb(var(--color-indicator-primary)/<alpha-value>)',
  				info: 'rgb(var(--color-indicator-info)/<alpha-value>)',
  				error: 'rgb(var(--color-indicator-error)/<alpha-value>)'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: 'var(--font-geist-sans)',
  			body: 'var(--font-geist-sans)',
  			mono: 'var(--font-geist-mono)',
  			roboto: [
  				'var(--font-roboto)'
  			],
  			inter: [
  				'var(--font-inter)'
  			],
  			'space-mono': [
  				'var(--font-space-mono)'
  			],
  			'geist-sans': [
  				'var(--font-geist-sans)'
  			],
  			'geist-mono': [
  				'var(--font-geist-mono)'
  			]
  		},
  		fontWeight: {
  			extrablack: '950'
  		},
  		fontSize: {
  			'2xs': '10px'
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
  			'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
};
