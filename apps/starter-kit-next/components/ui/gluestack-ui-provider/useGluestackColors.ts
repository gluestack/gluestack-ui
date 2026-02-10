import { useColorScheme } from 'nativewind';
import { colors } from './config';

// Type for the color palette
export type ColorPalette = {
  primary: string;
  primaryForeground: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
};

// Type for calendar theme
export type CalendarTheme = {
  backgroundColor: string;
  calendarBackground: string;
  textSectionTitleColor: string;
  selectedDayBackgroundColor: string;
  selectedDayTextColor: string;
  todayTextColor: string;
  todayBackgroundColor: string;
  dayTextColor: string;
  textDisabledColor: string;
  dotColor: string;
  selectedDotColor: string;
  arrowColor: string;
  monthTextColor: string;
  indicatorColor: string;
};

/**
 * Hook to get gluestack color palette as RGB values from config
 * Reads from the config file dynamically based on color scheme
 * Returns raw RGB strings (e.g., '23 23 23')
 */
export function useGluestackColors(): ColorPalette {
  const { colorScheme } = useColorScheme();
  const theme = colors[colorScheme || 'light'];

  return {
    primary: theme['--primary'],
    primaryForeground: theme['--primary-foreground'],
    background: theme['--background'],
    foreground: theme['--foreground'],
    card: theme['--card'],
    cardForeground: theme['--card-foreground'],
    popover: theme['--popover'],
    popoverForeground: theme['--popover-foreground'],
    secondary: theme['--secondary'],
    secondaryForeground: theme['--secondary-foreground'],
    muted: theme['--muted'],
    mutedForeground: theme['--muted-foreground'],
    accent: theme['--accent'],
    accentForeground: theme['--accent-foreground'],
    destructive: theme['--destructive'],
    border: theme['--border'],
    input: theme['--input'],
    ring: theme['--ring'],
  };
}

/**
 * Hook to get calendar theme object for react-native-calendars
 * Uses gluestack color tokens (RGB format)
 */
export function useCalendarTheme(): CalendarTheme {
  const palette = useGluestackColors();

  return {
    backgroundColor: palette.background,
    calendarBackground: palette.background,
    textSectionTitleColor: palette.mutedForeground,
    selectedDayBackgroundColor: palette.primary,
    selectedDayTextColor: palette.primaryForeground,
    todayTextColor: palette.primary,
    todayBackgroundColor: palette.accent,
    dayTextColor: palette.foreground,
    textDisabledColor: palette.mutedForeground,
    dotColor: palette.primary,
    selectedDotColor: palette.primaryForeground,
    arrowColor: palette.foreground,
    monthTextColor: palette.foreground,
    indicatorColor: palette.primary,
  };
}
