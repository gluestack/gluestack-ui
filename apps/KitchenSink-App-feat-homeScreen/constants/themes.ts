import { vars } from 'nativewind';
import { config as gluestackConfig } from '@/components/ui/gluestack-ui-provider/config';

export type ThemeName =
  | 'default'
  | 'vercel'
  | 'violetBloom'
  | 'supabase'
  | 'claude'
  | 'twitter';

export type ColorMode = 'light' | 'dark';

// Theme configurations using shadcn-style tokens
export const themeConfigs = {
  default: {
    name: 'Default',
    description: 'Gluestack UI default theme',
    light: vars({
      // From gluestackConfig.light
      '--primary': '23 23 23',
      '--primary-foreground': '250 250 250',
      '--card': '255 255 255',
      '--secondary': '245 245 245',
      '--secondary-foreground': '23 23 23',
      '--background': '255 255 255',
      '--popover': '255 255 255',
      '--popover-foreground': '10 10 10',
      '--muted': '245 245 245',
      '--muted-foreground': '115 115 115',
      '--destructive': '231 0 11',
      '--destructive-foreground': '255 255 255',
      '--foreground': '10 10 10',
      '--border': '229 229 229',
      '--input': '229 229 229',
      '--ring': '212 212 212',
      '--accent': '247 247 247',
      '--accent-foreground': '52 52 52',
    }),
    dark: vars({
      // From gluestackConfig.dark
      '--primary-foreground': '23 23 23',
      '--primary': '255 245 245',
      '--card': '23 23 23',
      '--foreground': '250 250 250',
      '--popover': '23 23 23',
      '--popover-foreground': '250 250 250',
      '--secondary': '38 38 38',
      '--secondary-foreground': '250 250 250',
      '--destructive': '255 100 103',
      '--background': '10 10 10',
      '--input': '46 46 46',
      '--border': '46 46 46',
      '--ring': '115 115 115',
      '--accent': '38 38 38',
      '--accent-foreground': '250 250 250',
      '--muted': '38 38 38',
      '--muted-foreground': '161 161 161',
    }),
  },
  vercel: {
    name: 'Vercel',
    description: 'Minimalist black and white',
    light: vars({
      '--primary': '0 0 0', // black
      '--primary-foreground': '255 255 255',

      '--secondary': '250 250 250', // neutral-50
      '--secondary-foreground': '0 0 0',

      '--background': '255 255 255', // white
      '--foreground': '0 0 0', // black

      '--card': '255 255 255',
      '--card-foreground': '0 0 0',

      '--popover': '255 255 255',
      '--popover-foreground': '0 0 0',

      '--muted': '245 245 245', // neutral-100
      '--muted-foreground': '82 82 82', // neutral-600

      '--accent': '245 245 245', // neutral-100
      '--accent-foreground': '23 23 23', // neutral-900

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '229 229 229', // neutral-200
      '--input': '229 229 229',
      '--ring': '0 0 0', // black
      '--font-sans': 'Geist',
      '--font-serif': 'Georgia',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
    dark: vars({
      '--primary': '255 255 255', // white
      '--primary-foreground': '0 0 0',

      '--secondary': '23 23 23', // neutral-900
      '--secondary-foreground': '255 255 255',

      '--background': '0 0 0', // black
      '--foreground': '255 255 255', // white

      '--card': '10 10 10', // near black
      '--card-foreground': '255 255 255',

      '--popover': '10 10 10',
      '--popover-foreground': '255 255 255',

      '--muted': '38 38 38', // neutral-800
      '--muted-foreground': '163 163 163', // neutral-400

      '--accent': '38 38 38', // neutral-800
      '--accent-foreground': '250 250 250',

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '38 38 38', // neutral-800
      '--input': '38 38 38',
      '--ring': '255 255 255', // white
      '--font-sans': 'Geist',
      '--font-serif': 'Georgia',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
  },
  violetBloom: {
    name: 'Violet Bloom',
    description: 'Purple and violet tones',
    light: vars({
      '--primary': '112 51 255', // rgb(112, 51, 255)
      '--primary-foreground': '255 255 255',

      '--secondary': '237 240 244', // rgb(237, 240, 244)
      '--secondary-foreground': '8 8 8',

      '--background': '253 253 253', // rgb(253, 253, 253)
      '--foreground': '0 0 0',

      '--card': '253 253 253',
      '--card-foreground': '0 0 0',

      '--popover': '252 252 252',
      '--popover-foreground': '0 0 0',

      '--muted': '245 245 245',
      '--muted-foreground': '82 82 82',

      '--accent': '226 235 255', // rgb(226, 235, 255)
      '--accent-foreground': '30 105 220', // rgb(30, 105, 220)

      '--destructive': '229 75 79', // rgb(229, 75, 79)
      '--destructive-foreground': '255 255 255',

      '--border': '231 231 238', // rgb(231, 231, 238)
      '--input': '235 235 235',
      '--ring': '0 0 0',
      '--font-sans': 'Jakarta',
      '--font-serif': 'Lora_400Regular',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
    dark: vars({
      '--primary': '140 92 255', // rgb(140, 92, 255)
      '--primary-foreground': '255 255 255',

      '--secondary': '42 44 51', // rgb(42, 44, 51)
      '--secondary-foreground': '240 240 240',

      '--background': '26 27 30', // rgb(26, 27, 30)
      '--foreground': '240 240 240',

      '--card': '34 35 39', // rgb(34, 35, 39)
      '--card-foreground': '240 240 240',

      '--popover': '34 35 39',
      '--popover-foreground': '240 240 240',

      '--muted': '42 44 51',
      '--muted-foreground': '160 160 160',

      '--accent': '30 41 59', // rgb(30, 41, 59)
      '--accent-foreground': '121 192 255', // rgb(121, 192, 255)

      '--destructive': '248 113 113',
      '--destructive-foreground': '255 255 255',

      '--border': '51 53 58', // rgb(51, 53, 58)
      '--input': '51 53 58',
      '--ring': '140 92 255',
      '--font-sans': 'Jakarta',
      '--font-serif': 'Lora_400Regular',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
  },
  supabase: {
    name: 'Supabase',
    description: 'Fresh green accent colors',
    light: vars({
      '--primary': '114 227 173', // rgb(114, 227, 173)
      '--primary-foreground': '30 39 35', // rgb(30, 39, 35)

      '--secondary': '253 253 253', // rgb(253, 253, 253)
      '--secondary-foreground': '23 23 23',

      '--background': '252 252 252', // rgb(252, 252, 252)
      '--foreground': '23 23 23',

      '--card': '252 252 252',
      '--card-foreground': '23 23 23',

      '--popover': '252 252 252',
      '--popover-foreground': '82 82 82',

      '--muted': '237 237 237', // rgb(237, 237, 237)
      '--muted-foreground': '32 32 32',

      '--accent': '237 237 237',
      '--accent-foreground': '32 32 32',

      '--destructive': '202 50 20', // rgb(202, 50, 20)
      '--destructive-foreground': '255 252 252',

      '--border': '223 223 223', // rgb(223, 223, 223)
      '--input': '246 246 246',
      '--ring': '114 227 173',
      '--font-sans': 'Outfit_400Regular',
      '--font-serif': 'Outfit_400Regular',
      '--font-mono': 'Outfit_400Regular',
    }),
    dark: vars({
      '--primary': '0 98 57', // rgb(0, 98, 57)
      '--primary-foreground': '221 232 227', // rgb(221, 232, 227)

      '--secondary': '36 36 36', // rgb(36, 36, 36)
      '--secondary-foreground': '250 250 250',

      '--background': '18 18 18', // rgb(18, 18, 18)
      '--foreground': '226 232 240', // rgb(226, 232, 240)

      '--card': '23 23 23', // rgb(23, 23, 23)
      '--card-foreground': '226 232 240',

      '--popover': '36 36 36', // rgb(36, 36, 36)
      '--popover-foreground': '169 169 169',

      '--muted': '31 31 31', // rgb(31, 31, 31)
      '--muted-foreground': '162 162 162',

      '--accent': '49 49 49', // rgb(49, 49, 49)
      '--accent-foreground': '250 250 250',

      '--destructive': '84 28 21', // rgb(84, 28, 21)
      '--destructive-foreground': '237 233 232',

      '--border': '41 41 41', // rgb(41, 41, 41)
      '--input': '36 36 36',
      '--ring': '74 222 128', // rgb(74, 222, 128)
      '--font-sans': 'Outfit_400Regular',
      '--font-serif': 'Outfit_400Regular',
      '--font-mono': 'Outfit_400Regular',
    }),
  },
  claude: {
    name: 'Claude',
    description: 'Warm terracotta and earthy tones',
    light: vars({
      '--primary': '201 100 66', // rgb(201, 100, 66)
      '--primary-foreground': '255 255 255',

      '--secondary': '233 230 220', // rgb(233, 230, 220)
      '--secondary-foreground': '83 81 70', // rgb(83, 81, 70)

      '--background': '250 249 245', // rgb(250, 249, 245)
      '--foreground': '61 57 41', // rgb(61, 57, 41)

      '--card': '250 249 245',
      '--card-foreground': '20 20 19', // rgb(20, 20, 19)

      '--popover': '255 255 255',
      '--popover-foreground': '40 38 27', // rgb(40, 38, 27)

      '--muted': '237 233 222', // rgb(237, 233, 222)
      '--muted-foreground': '131 130 125', // rgb(131, 130, 125)

      '--accent': '233 230 220',
      '--accent-foreground': '40 38 27',

      '--destructive': '20 20 19',
      '--destructive-foreground': '255 255 255',

      '--border': '218 217 212', // rgb(218, 217, 212)
      '--input': '180 178 167', // rgb(180, 178, 167)
      '--ring': '201 100 66',
      '--font-sans':
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      '--font-serif':
        'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
    dark: vars({
      '--primary': '217 119 87', // rgb(217, 119, 87)
      '--primary-foreground': '255 255 255',

      '--secondary': '250 249 245', // rgb(250, 249, 245)
      '--secondary-foreground': '48 48 46', // rgb(48, 48, 46)

      '--background': '38 38 36', // rgb(38, 38, 36)
      '--foreground': '195 192 182', // rgb(195, 192, 182)

      '--card': '38 38 36',
      '--card-foreground': '250 249 245',

      '--popover': '48 48 46', // rgb(48, 48, 46)
      '--popover-foreground': '229 229 226', // rgb(229, 229, 226)

      '--muted': '27 27 25', // rgb(27, 27, 25)
      '--muted-foreground': '183 181 169', // rgb(183, 181, 169)

      '--accent': '26 25 21', // rgb(26, 25, 21)
      '--accent-foreground': '245 244 238', // rgb(245, 244, 238)

      '--destructive': '239 68 68',
      '--destructive-foreground': '255 255 255',

      '--border': '62 62 56', // rgb(62, 62, 56)
      '--input': '82 81 74', // rgb(82, 81, 74)
      '--ring': '217 119 87',
      '--font-sans':
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      '--font-serif':
        'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      '--font-mono':
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    }),
  },
  twitter: {
    name: 'Twitter',
    description: 'Classic Twitter blue',
    light: vars({
      '--primary': '30 157 241', // rgb(30, 157, 241)
      '--primary-foreground': '255 255 255',

      '--secondary': '15 20 25', // rgb(15, 20, 25)
      '--secondary-foreground': '255 255 255',

      '--background': '255 255 255', // rgb(255, 255, 255)
      '--foreground': '15 20 25', // rgb(15, 20, 25)

      '--card': '247 248 248', // rgb(247, 248, 248)
      '--card-foreground': '15 20 25',

      '--popover': '255 255 255',
      '--popover-foreground': '15 20 25',

      '--muted': '229 229 230', // rgb(229, 229, 230)
      '--muted-foreground': '15 20 25',

      '--accent': '227 236 246', // rgb(227, 236, 246)
      '--accent-foreground': '30 157 241', // rgb(30, 157, 241)

      '--destructive': '244 33 46', // rgb(244, 33, 46)
      '--destructive-foreground': '255 255 255',

      '--border': '225 234 239', // rgb(225, 234, 239)
      '--input': '247 249 250', // rgb(247, 249, 250)
      '--ring': '29 161 242', // rgb(29, 161, 242)
      '--font-sans': 'OpenSans_400Regular',
      '--font-serif': 'Georgia',
      '--font-mono': 'Menlo, monospace',
    }),
    dark: vars({
      '--primary': '28 156 240', // rgb(28, 156, 240)
      '--primary-foreground': '255 255 255',

      '--secondary': '240 243 244', // rgb(240, 243, 244)
      '--secondary-foreground': '15 20 25', // rgb(15, 20, 25)

      '--background': '0 0 0', // rgb(0, 0, 0)
      '--foreground': '231 233 234', // rgb(231, 233, 234)

      '--card': '23 24 28', // rgb(23, 24, 28)
      '--card-foreground': '217 217 217', // rgb(217, 217, 217)

      '--popover': '0 0 0',
      '--popover-foreground': '231 233 234',

      '--muted': '24 24 24', // rgb(24, 24, 24)
      '--muted-foreground': '114 118 122', // rgb(114, 118, 122)

      '--accent': '6 22 34', // rgb(6, 22, 34)
      '--accent-foreground': '28 156 240',

      '--destructive': '244 33 46',
      '--destructive-foreground': '255 255 255',

      '--border': '36 38 40', // rgb(36, 38, 40)
      '--input': '34 48 60', // rgb(34, 48, 60)
      '--ring': '29 161 242',
      '--font-sans': 'OpenSans_400Regular',
      '--font-serif': 'Georgia',
      '--font-mono': 'Menlo',
    }),
  },
};

export const themeNames: ThemeName[] = Object.keys(themeConfigs) as ThemeName[];

// Font mapping for each theme and mode
// For React Native, we extract the first font from CSS font stacks
const themeFonts: Record<ThemeName, { light: string; dark: string }> = {
  default: {
    light: 'Outfit_400Regular',
    dark: 'Outfit_400Regular',
  },
  vercel: {
    light: 'Outfit_400Regular',
    dark: 'Outfit_600SemiBold',
  },
  violetBloom: {
    light: 'Lora_500Medium',
    dark: 'Lora_500Medium',
  },
  supabase: {
    light: 'Andika_400Regular',
    dark: 'Andika_700Bold',
  },
  claude: {
    // For CSS font stacks, use system fonts (first in stack)
    // React Native will fallback to system default
    light: 'system', // Maps to system-ui from CSS stack
    dark: 'system', // Maps to system-ui from CSS stack
  },
  twitter: {
    light: 'Georgia',
    dark: 'Georgia',
  },
};

export function getThemeVars(theme: ThemeName, mode: ColorMode) {
  return themeConfigs[theme][mode];
}

// Helper to extract first font from CSS font stack for React Native
function extractFirstFont(fontStack: string): string {
  // Remove quotes and get first font name
  const firstFont = fontStack.split(',')[0]?.trim().replace(/['"]/g, '');
  // Map common CSS font names to React Native equivalents
  const fontMap: Record<string, string> = {
    'ui-sans-serif': 'system',
    'system-ui': 'system',
    '-apple-system': 'system',
    'BlinkMacSystemFont': 'system',
  };
  return fontMap[firstFont] || firstFont || 'system';
}

export function getThemeFontSans(theme: ThemeName, mode: ColorMode): string {
  // For Claude theme, extract first font from CSS stack
  if (theme === 'claude') {
    // Claude uses CSS font stacks, so we need to extract the first font
    // For React Native, we'll use system font as fallback
    return 'system';
  }
  return themeFonts[theme]?.[mode] || 'Outfit_400Regular';
}
