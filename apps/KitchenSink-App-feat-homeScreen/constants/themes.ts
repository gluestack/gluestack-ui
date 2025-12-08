import { vars } from 'nativewind';
import { config as gluestackConfig } from '@/components/ui/gluestack-ui-provider/config';

export type ThemeName =
  | 'default'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'lavender'
  | 'cyber'
  | 'rose';

export type ColorMode = 'light' | 'dark';

// Theme configurations using shadcn-style tokens
export const themeConfigs = {
  default: {
    name: 'Default',
    description: 'Gluestack UI default theme',
    light: gluestackConfig.light,
    dark: gluestackConfig.dark,
  },
  ocean: {
    name: 'Ocean',
    description: 'Calm blues and aqua tones',
    light: vars({
      '--primary': '6 182 212', // cyan-500
      '--primary-foreground': '255 255 255',

      '--secondary': '207 250 254', // cyan-100
      '--secondary-foreground': '22 78 99', // cyan-900

      '--background': '236 254 255', // cyan-50
      '--foreground': '22 78 99', // cyan-900

      '--card': '255 255 255',
      '--card-foreground': '22 78 99',

      '--popover': '255 255 255',
      '--popover-foreground': '22 78 99',

      '--muted': '207 250 254', // cyan-100
      '--muted-foreground': '8 145 178', // cyan-600

      '--accent': '165 243 252', // cyan-200
      '--accent-foreground': '14 116 144', // cyan-700

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '165 243 252', // cyan-200
      '--input': '165 243 252',
      '--ring': '6 182 212', // cyan-500
    }),
    dark: vars({
      '--primary': '34 211 238', // cyan-400
      '--primary-foreground': '8 51 68', // cyan-950

      '--secondary': '22 78 99', // cyan-900
      '--secondary-foreground': '207 250 254', // cyan-100

      '--background': '8 51 68', // cyan-950
      '--foreground': '236 254 255', // cyan-50

      '--card': '22 78 99', // cyan-900
      '--card-foreground': '236 254 255',

      '--popover': '22 78 99',
      '--popover-foreground': '236 254 255',

      '--muted': '21 94 117', // cyan-800
      '--muted-foreground': '103 232 249', // cyan-300

      '--accent': '14 116 144', // cyan-700
      '--accent-foreground': '207 250 254',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '21 94 117', // cyan-800
      '--input': '21 94 117',
      '--ring': '34 211 238', // cyan-400
    }),
  },
  forest: {
    name: 'Forest',
    description: 'Natural greens and earthy tones',
    light: vars({
      '--primary': '34 197 94', // green-500
      '--primary-foreground': '255 255 255',

      '--secondary': '220 252 231', // green-100
      '--secondary-foreground': '20 83 45', // green-900

      '--background': '240 253 244', // green-50
      '--foreground': '20 83 45', // green-900

      '--card': '255 255 255',
      '--card-foreground': '20 83 45',

      '--popover': '255 255 255',
      '--popover-foreground': '20 83 45',

      '--muted': '220 252 231', // green-100
      '--muted-foreground': '22 163 74', // green-600

      '--accent': '187 247 208', // green-200
      '--accent-foreground': '21 128 61', // green-700

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '187 247 208', // green-200
      '--input': '187 247 208',
      '--ring': '34 197 94', // green-500
    }),
    dark: vars({
      '--primary': '74 222 128', // green-400
      '--primary-foreground': '5 46 22', // green-950

      '--secondary': '20 83 45', // green-900
      '--secondary-foreground': '220 252 231', // green-100

      '--background': '5 46 22', // green-950
      '--foreground': '240 253 244', // green-50

      '--card': '20 83 45', // green-900
      '--card-foreground': '240 253 244',

      '--popover': '20 83 45',
      '--popover-foreground': '240 253 244',

      '--muted': '22 101 52', // green-800
      '--muted-foreground': '134 239 172', // green-300

      '--accent': '21 128 61', // green-700
      '--accent-foreground': '220 252 231',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '22 101 52', // green-800
      '--input': '22 101 52',
      '--ring': '74 222 128', // green-400
    }),
  },
  sunset: {
    name: 'Sunset',
    description: 'Warm oranges and pinks',
    light: vars({
      '--primary': '249 115 22', // orange-500
      '--primary-foreground': '255 255 255',

      '--secondary': '255 237 213', // orange-100
      '--secondary-foreground': '124 45 18', // orange-900

      '--background': '255 247 237', // orange-50
      '--foreground': '124 45 18', // orange-900

      '--card': '255 255 255',
      '--card-foreground': '124 45 18',

      '--popover': '255 255 255',
      '--popover-foreground': '124 45 18',

      '--muted': '255 237 213', // orange-100
      '--muted-foreground': '234 88 12', // orange-600

      '--accent': '254 215 170', // orange-200
      '--accent-foreground': '194 65 12', // orange-700

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '254 215 170', // orange-200
      '--input': '254 215 170',
      '--ring': '249 115 22', // orange-500
    }),
    dark: vars({
      '--primary': '251 146 60', // orange-400
      '--primary-foreground': '67 20 7', // orange-950

      '--secondary': '124 45 18', // orange-900
      '--secondary-foreground': '255 237 213', // orange-100

      '--background': '67 20 7', // orange-950
      '--foreground': '255 247 237', // orange-50

      '--card': '124 45 18', // orange-900
      '--card-foreground': '255 247 237',

      '--popover': '124 45 18',
      '--popover-foreground': '255 247 237',

      '--muted': '154 52 18', // orange-800
      '--muted-foreground': '253 186 116', // orange-300

      '--accent': '194 65 12', // orange-700
      '--accent-foreground': '255 237 213',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '154 52 18', // orange-800
      '--input': '154 52 18',
      '--ring': '251 146 60', // orange-400
    }),
  },
  lavender: {
    name: 'Lavender',
    description: 'Soft purples and pastels',
    light: vars({
      '--primary': '168 85 247', // purple-500
      '--primary-foreground': '255 255 255',

      '--secondary': '243 232 255', // purple-100
      '--secondary-foreground': '88 28 135', // purple-900

      '--background': '250 245 255', // purple-50
      '--foreground': '88 28 135', // purple-900

      '--card': '255 255 255',
      '--card-foreground': '88 28 135',

      '--popover': '255 255 255',
      '--popover-foreground': '88 28 135',

      '--muted': '243 232 255', // purple-100
      '--muted-foreground': '147 51 234', // purple-600

      '--accent': '233 213 255', // purple-200
      '--accent-foreground': '126 34 206', // purple-700

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '233 213 255', // purple-200
      '--input': '233 213 255',
      '--ring': '168 85 247', // purple-500
    }),
    dark: vars({
      '--primary': '192 132 252', // purple-400
      '--primary-foreground': '59 7 100', // purple-950

      '--secondary': '88 28 135', // purple-900
      '--secondary-foreground': '243 232 255', // purple-100

      '--background': '59 7 100', // purple-950
      '--foreground': '250 245 255', // purple-50

      '--card': '88 28 135', // purple-900
      '--card-foreground': '250 245 255',

      '--popover': '88 28 135',
      '--popover-foreground': '250 245 255',

      '--muted': '107 33 168', // purple-800
      '--muted-foreground': '216 180 254', // purple-300

      '--accent': '126 34 206', // purple-700
      '--accent-foreground': '243 232 255',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '107 33 168', // purple-800
      '--input': '107 33 168',
      '--ring': '192 132 252', // purple-400
    }),
  },
  cyber: {
    name: 'Cyber',
    description: 'Neon pinks and electric blues',
    light: vars({
      '--primary': '236 72 153', // pink-500
      '--primary-foreground': '255 255 255',

      '--secondary': '252 231 243', // pink-100
      '--secondary-foreground': '131 24 67', // pink-900

      '--background': '253 242 248', // pink-50
      '--foreground': '131 24 67', // pink-900

      '--card': '255 255 255',
      '--card-foreground': '131 24 67',

      '--popover': '255 255 255',
      '--popover-foreground': '131 24 67',

      '--muted': '252 231 243', // pink-100
      '--muted-foreground': '219 39 119', // pink-600

      '--accent': '251 207 232', // pink-200
      '--accent-foreground': '190 24 93', // pink-700

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '251 207 232', // pink-200
      '--input': '251 207 232',
      '--ring': '236 72 153', // pink-500
    }),
    dark: vars({
      '--primary': '244 114 182', // pink-400
      '--primary-foreground': '80 7 36', // pink-950

      '--secondary': '131 24 67', // pink-900
      '--secondary-foreground': '252 231 243', // pink-100

      '--background': '80 7 36', // pink-950
      '--foreground': '253 242 248', // pink-50

      '--card': '131 24 67', // pink-900
      '--card-foreground': '253 242 248',

      '--popover': '131 24 67',
      '--popover-foreground': '253 242 248',

      '--muted': '157 23 77', // pink-800
      '--muted-foreground': '249 168 212', // pink-300

      '--accent': '190 24 93', // pink-700
      '--accent-foreground': '252 231 243',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '157 23 77', // pink-800
      '--input': '157 23 77',
      '--ring': '244 114 182', // pink-400
    }),
  },
  rose: {
    name: 'Rose',
    description: 'Elegant rose and burgundy',
    light: vars({
      '--primary': '225 29 72', // rose-600
      '--primary-foreground': '255 255 255',

      '--secondary': '255 228 230', // rose-100
      '--secondary-foreground': '136 19 55', // rose-900

      '--background': '255 241 242', // rose-50
      '--foreground': '136 19 55', // rose-900

      '--card': '255 255 255',
      '--card-foreground': '136 19 55',

      '--popover': '255 255 255',
      '--popover-foreground': '136 19 55',

      '--muted': '255 228 230', // rose-100
      '--muted-foreground': '190 18 60', // rose-700

      '--accent': '254 205 211', // rose-200
      '--accent-foreground': '159 18 57', // rose-800

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '254 205 211', // rose-200
      '--input': '254 205 211',
      '--ring': '225 29 72', // rose-600
    }),
    dark: vars({
      '--primary': '251 113 133', // rose-400
      '--primary-foreground': '76 5 25', // rose-950

      '--secondary': '136 19 55', // rose-900
      '--secondary-foreground': '255 228 230', // rose-100

      '--background': '76 5 25', // rose-950
      '--foreground': '255 241 242', // rose-50

      '--card': '136 19 55', // rose-900
      '--card-foreground': '255 241 242',

      '--popover': '136 19 55',
      '--popover-foreground': '255 241 242',

      '--muted': '159 18 57', // rose-800
      '--muted-foreground': '253 164 175', // rose-300

      '--accent': '190 18 60', // rose-700
      '--accent-foreground': '255 228 230',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '159 18 57', // rose-800
      '--input': '159 18 57',
      '--ring': '251 113 133', // rose-400
    }),
  },
};

export const themeNames: ThemeName[] = Object.keys(themeConfigs) as ThemeName[];

export function getThemeVars(theme: ThemeName, mode: ColorMode) {
  return themeConfigs[theme][mode];
}
