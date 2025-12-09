import { ScreenScrollView } from '@/components/custom/screen-scroll-view';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ColorMode, ThemeName, themeConfigs } from '@/constants/themes';
import { useAppTheme } from '@/contexts/app-theme-context';
import { LucideIcon, Moon, Palette, Sun } from 'lucide-react-native';
import React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

// ============================================================================
// Constants
// ============================================================================

const COLORS = {
  surface: { dark: '#1c1c1e', light: '#f2f2f7' },
  surfaceElevated: { dark: '#2c2c2e', light: '#ffffff' },
  textPrimary: { dark: '#ffffff', light: '#000000' },
  textSecondary: { dark: '#8e8e93', light: '#6c6c70' },
  textMuted: { dark: '#8e8e93', light: '#8e8e93' },
  border: { dark: 'rgba(255,255,255,0.08)', light: 'rgba(0,0,0,0.05)' },
  textSubtle: { dark: 'rgba(255,255,255,0.7)', light: 'rgba(0,0,0,0.6)' },
  textSubtler: { dark: 'rgba(255,255,255,0.6)', light: 'rgba(0,0,0,0.5)' },
} as const;

const THEME_PREVIEW_COLORS: Record<
  ThemeName,
  { primary: string; secondary: string; tertiary: string }
> = {
  default: { primary: '#3b82f6', secondary: '#8b5cf6', tertiary: '#10b981' },
  vercel: { primary: '#000000', secondary: '#525252', tertiary: '#a3a3a3' },
  violetBloom: {
    primary: '#7033ff',
    secondary: '#8c5cff',
    tertiary: '#1e69dc',
  },
  supabase: {
    primary: '#72e3ad',
    secondary: '#10b981',
    tertiary: '#3b82f6',
  },
  claude: {
    primary: '#c96442',
    secondary: '#b05730',
    tertiary: '#9c87f5',
  },
  twitter: {
    primary: '#1e9df1',
    secondary: '#1da1f2',
    tertiary: '#1c9cf0',
  },
};

const PIE_CHART = {
  radius: 26,
  center: 32,
  size: 64,
} as const;

// ============================================================================
// Helpers
// ============================================================================

const getColor = (colorKey: keyof typeof COLORS, isDark: boolean): string =>
  COLORS[colorKey][isDark ? 'dark' : 'light'];

const createShadowStyle = (isActive: boolean, isDark: boolean): ViewStyle => ({
  shadowColor: isActive ? '#000' : 'transparent',
  shadowOffset: { width: 0, height: isActive ? 1 : 0 },
  shadowOpacity: isActive ? (isDark ? 0.3 : 0.08) : 0,
  shadowRadius: isActive ? 3 : 0,
  elevation: isActive ? 2 : 0,
});

const createCardShadowStyle = (isDark: boolean): ViewStyle => ({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: isDark ? 0.3 : 0.06,
  shadowRadius: 8,
  elevation: 3,
});

const createPiePath = (startAngle: number, endAngle: number): string => {
  const { radius, center } = PIE_CHART;
  const start = (startAngle * Math.PI) / 180;
  const end = (endAngle * Math.PI) / 180;
  const x1 = center + radius * Math.cos(start);
  const y1 = center + radius * Math.sin(start);
  const x2 = center + radius * Math.cos(end);
  const y2 = center + radius * Math.sin(end);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
};

// ============================================================================
// Hooks
// ============================================================================

const usePressAnimation = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.92, { damping: 40, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 40, stiffness: 300 });
  };

  return { animatedStyle, handlePressIn, handlePressOut };
};

// ============================================================================
// Components
// ============================================================================

interface ThemePieChartProps {
  themeName: ThemeName;
  isActive: boolean;
  onPress: () => void;
  isDark: boolean;
  index: number;
}

const ThemePieChart: React.FC<ThemePieChartProps> = ({
  themeName,
  isActive,
  onPress,
  isDark,
  index,
}) => {
  const colors = THEME_PREVIEW_COLORS[themeName];
  const themeConfig = themeConfigs[themeName];
  const { animatedStyle, handlePressIn, handlePressOut } = usePressAnimation();
  const { radius, center, size } = PIE_CHART;

  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 60)
        .springify()}
    >
      <Animated.View style={animatedStyle}>
        <Pressable
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          className="items-center w-[72px]"
        >
          <View className="rounded-full p-1">
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {isActive && (
                <Circle
                  cx={center}
                  cy={center}
                  r={radius + 6}
                  fill={colors.primary}
                  opacity={0.15}
                />
              )}
              <Path d={createPiePath(-90, 90)} fill={colors.primary} />
              <Path d={createPiePath(90, 180)} fill={colors.secondary} />
              <Path d={createPiePath(180, 270)} fill={colors.tertiary} />
              {isActive && (
                <Circle
                  cx={center}
                  cy={center}
                  r={radius + 3}
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth={2.5}
                />
              )}
            </Svg>
          </View>
          <Text
            className="text-[11px] mt-1.5 text-center"
            style={{
              color: isActive ? colors.primary : getColor('textSubtle', isDark),
              fontWeight: isActive ? '600' : '500',
            }}
          >
            {themeConfig.name}
          </Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

interface SegmentButtonProps {
  mode: ColorMode;
  currentMode: ColorMode;
  isDark: boolean;
  icon: LucideIcon;
  label: string;
  activeIconClass: string;
  onPress: () => void;
}

const SegmentButton: React.FC<SegmentButtonProps> = ({
  mode,
  currentMode,
  isDark,
  icon,
  label,
  activeIconClass,
  onPress,
}) => {
  const isActive = currentMode === mode;

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 flex-row items-center justify-center py-3 px-4 rounded-xl"
      style={{
        backgroundColor: isActive
          ? getColor('surfaceElevated', isDark)
          : 'transparent',
        ...createShadowStyle(isActive, isDark),
      }}
    >
      <Icon
        as={icon}
        size="sm"
        className={isActive ? activeIconClass : 'text-typography-400'}
      />
      <Text
        className="ml-2 text-sm"
        style={{
          color: isActive
            ? getColor('textPrimary', isDark)
            : getColor('textMuted', isDark),
          fontWeight: isActive ? '600' : '500',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const APPEARANCE_SEGMENTS: Array<{
  mode: ColorMode;
  icon: LucideIcon;
  label: string;
  activeIconClass: string;
}> = [
  {
    mode: 'light',
    icon: Sun,
    label: 'Light',
    activeIconClass: 'text-warning-500',
  },
  {
    mode: 'dark',
    icon: Moon,
    label: 'Dark',
    activeIconClass: 'text-primary-400',
  },
];

const AppearanceSegmentedControl: React.FC = () => {
  const { isDark, colorMode, setColorMode } = useAppTheme();

  return (
    <Animated.View
      entering={FadeInDown.duration(400).delay(100).springify()}
      className="rounded-2xl p-1"
      style={{ backgroundColor: getColor('surface', isDark) }}
    >
      <View className="flex-row">
        {APPEARANCE_SEGMENTS.map((segment) => (
          <SegmentButton
            key={segment.mode}
            mode={segment.mode}
            currentMode={colorMode}
            isDark={isDark}
            icon={segment.icon}
            label={segment.label}
            activeIconClass={segment.activeIconClass}
            onPress={() => setColorMode(segment.mode)}
          />
        ))}
      </View>
    </Animated.View>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  isDark: boolean;
  delay?: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  isDark,
  delay = 0,
}) => (
  <Animated.View
    entering={FadeInDown.duration(400).delay(delay).springify()}
    className="flex-row items-center mb-3"
  >
    {icon && (
      <View
        className="w-8 h-8 rounded-lg items-center justify-center mr-3"
        style={{ backgroundColor: getColor('surface', isDark) }}
      >
        <Icon as={icon} size="sm" className="text-primary-500" />
      </View>
    )}
    <View className="flex-1">
      <Text
        className="text-base font-semibold"
        style={{ color: getColor('textPrimary', isDark) }}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          className="text-xs mt-0.5"
          style={{ color: getColor('textSecondary', isDark) }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  </Animated.View>
);

interface ActiveThemeIndicatorProps {
  themeName: ThemeName;
  isDark: boolean;
}

const ActiveThemeIndicator: React.FC<ActiveThemeIndicatorProps> = ({
  themeName,
  isDark,
}) => {
  const colors = THEME_PREVIEW_COLORS[themeName];
  const config = themeConfigs[themeName];

  return (
    <View
      className="mt-2 pt-4 flex-row items-center justify-center"
      style={{ borderTopWidth: 1, borderTopColor: getColor('border', isDark) }}
    >
      <View
        className="w-3 h-3 rounded-full mr-2"
        style={{ backgroundColor: colors.primary }}
      />
      <Text
        className="text-sm"
        style={{ color: getColor('textSubtler', isDark) }}
      >
        Active:{' '}
        <Text style={{ color: colors.primary, fontWeight: '600' }}>
          {config.name}
        </Text>
      </Text>
    </View>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export default function ThemesTab() {
  const { isDark, availableThemes, currentTheme, setTheme } = useAppTheme();

  return (
    <ScreenScrollView
      className="px-5"
      contentContainerStyle={{ paddingTop: 40 }}
    >
      <VStack space="2xl" className="pb-10">
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(500).springify()}>
          <VStack space="xs">
            <Heading size="2xl" className="text-typography-900">
              Appearance
            </Heading>
            <Text className="text-typography-500 text-base">
              Personalize your visual experience
            </Text>
          </VStack>
        </Animated.View>

        {/* Display Mode Section */}
        <VStack space="sm">
          <SectionHeader
            title="Display Mode"
            subtitle="Choose your preferred brightness"
            icon={Sun}
            isDark={isDark}
            delay={50}
          />
          <AppearanceSegmentedControl />
        </VStack>

        {/* Color Themes Section */}
        <VStack space="sm">
          <SectionHeader
            title="Color Theme"
            subtitle="Select your favorite color palette"
            icon={Palette}
            isDark={isDark}
            delay={150}
          />
          <Animated.View
            entering={FadeInDown.duration(400).delay(200).springify()}
            className="rounded-2xl p-4"
            style={{
              backgroundColor: getColor('surface', isDark),
              ...createCardShadowStyle(isDark),
            }}
          >
            <View className="flex-row flex-wrap">
              {availableThemes.map((theme, index) => (
                <View key={theme.name} className="mb-4">
                  <ThemePieChart
                    themeName={theme.name}
                    isActive={currentTheme === theme.name}
                    onPress={() => setTheme(theme.name)}
                    isDark={isDark}
                    index={index}
                  />
                </View>
              ))}
            </View>
            <ActiveThemeIndicator themeName={currentTheme} isDark={isDark} />
          </Animated.View>
        </VStack>
      </VStack>
    </ScreenScrollView>
  );
}
