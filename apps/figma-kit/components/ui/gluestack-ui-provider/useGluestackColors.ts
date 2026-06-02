import { useColorScheme } from 'nativewind';
import { colors } from './config';

/**
 * Convert CSS variable name to camelCase
 * Example: '--primary-foreground' -> 'primaryForeground'
 */
function toCamelCase(str: string): string {
  return str
    .replace(/^--/, '') // Remove leading --
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert -x to X
}

/**
 * Convert RGB string "23 23 23" to hex "#171717"
 */
function rgbToHex(rgbString: string): string {
  const parts = rgbString.trim().split(/\s+/);
  if (parts.length !== 3) return '#000000';

  const [r, g, b] = parts.map((s) => {
    const num = parseInt(s, 10);
    return isNaN(num) ? 0 : num;
  });

  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Hook to get all gluestack colors as hex values
 * Automatically converts all CSS variables to camelCase
 * Returns a dynamic object with all colors
 *
 * Usage: const colors = useGluestackColors();
 *          colors.primary -> '#171717'
 *          colors.primaryForeground -> '#fafafa'
 *          colors.forest -> '#228b22' (if you add --forest to config)
 */
export function useGluestackColors(): Record<string, string> {
  const { colorScheme } = useColorScheme();
  const theme = colors[colorScheme || 'light'];

  // Dynamically convert all CSS variables to camelCase hex colors
  const result: Record<string, string> = {};

  Object.entries(theme).forEach(([key, value]) => {
    const camelKey = toCamelCase(key);
    result[camelKey] = rgbToHex(value as string);
  });

  return result;
}

/**
 * Hook to get calendar theme object for react-native-calendars
 * Automatically maps all available colors
 */
export function useCalendarTheme(): Record<string, string> {
  const palette = useGluestackColors();

  return {
    backgroundColor: palette.background || '#ffffff',
    calendarBackground: palette.background || '#ffffff',
    textSectionTitleColor: palette.mutedForeground || '#737373',
    selectedDayBackgroundColor: palette.primary || '#171717',
    selectedDayTextColor: palette.primaryForeground || '#fafafa',
    todayTextColor: palette.primary || '#171717',
    todayBackgroundColor: palette.accent || '#f7f7f7',
    dayTextColor: palette.foreground || '#0a0a0a',
    textDisabledColor: palette.mutedForeground || '#737373',
    dotColor: palette.primary || '#171717',
    selectedDotColor: palette.primaryForeground || '#fafafa',
    arrowColor: palette.foreground || '#0a0a0a',
    monthTextColor: palette.foreground || '#0a0a0a',
    indicatorColor: palette.primary || '#171717',
  };
}

// Type helper - you can use this to get typed colors if needed
export type GluestackColors = ReturnType<typeof useGluestackColors>;
