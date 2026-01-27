import { ScreenScrollView } from '@/components/custom/screen-scroll-view';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ColorMode, ThemeName, themeConfigs } from '@/constants/themes';
import { useAppTheme } from '@/contexts/app-theme-context';
import { LucideIcon, Moon, Palette, Sun } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, Pressable, View, ViewStyle } from 'react-native';
import { GlassView } from 'expo-glass-effect';

import Animated, {
  Easing,
  FadeInDown,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

const AnimatedGlassView = Animated.createAnimatedComponent(GlassView);
// ============================================================================
// Constants
// ============================================================================

const COLORS = {
  surface: { dark: '#1c1c1e', light: '#f2f2f7' },
  textPrimary: { dark: '#ffffff', light: '#000000' },
  textSecondary: { dark: '#8e8e93', light: '#6c6c70' },
  textMuted: { dark: '#8e8e93', light: '#8e8e93' },
  border: { dark: 'rgba(255,255,255,0.08)', light: 'rgba(0,0,0,0.05)' },
  textSubtle: { dark: 'rgba(255,255,255,0.7)', light: 'rgba(0,0,0,0.6)' },
  textSubtler: { dark: 'rgba(255,255,255,0.6)', light: 'rgba(0,0,0,0.5)' },
} as const;

// Helper function to convert RGB string to hex
const rgbToHex = (rgb: string): string => {
  const [r, g, b] = rgb.split(' ').map(Number);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Theme preview colors extracted from theme configurations
// These are the RGB values used in the actual theme configs
const THEME_PREVIEW_COLORS: Record<
  ThemeName,
  { primary: string; secondary: string; tertiary: string }
> = {
  default: {
    primary: rgbToHex('23 23 23'), // --primary
    secondary: rgbToHex('245 245 245'), // --secondary
    tertiary: rgbToHex('247 247 247'), // --accent
  },
  vercel: {
    primary: rgbToHex('0 0 0'), // --primary (black)
    secondary: rgbToHex('250 250 250'), // --secondary
    tertiary: rgbToHex('245 245 245'), // --accent
  },
  violetBloom: {
    primary: rgbToHex('112 51 255'), // --primary
    secondary: rgbToHex('237 240 244'), // --secondary
    tertiary: rgbToHex('226 235 255'), // --accent
  },
  supabase: {
    primary: rgbToHex('114 227 173'), // --primary (green)
    secondary: rgbToHex('253 253 253'), // --secondary
    tertiary: rgbToHex('237 237 237'), // --accent
  },
  claude: {
    primary: rgbToHex('201 100 66'), // --primary (terracotta)
    secondary: rgbToHex('233 230 220'), // --secondary
    tertiary: rgbToHex('237 233 222'), // --accent
  },
  twitter: {
    primary: rgbToHex('30 157 241'), // --primary (blue)
    secondary: rgbToHex('15 20 25'), // --secondary
    tertiary: rgbToHex('227 236 246'), // --accent
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
}) => {
  const colors = THEME_PREVIEW_COLORS[themeName];
  const themeConfig = themeConfigs[themeName];
  const { animatedStyle, handlePressIn, handlePressOut } = usePressAnimation();
  const { radius, center, size } = PIE_CHART;

  return (
    <Animated.View entering={FadeInDown.duration(200)}>
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
            className={`text-[11px] mt-1.5 text-center text-foreground ${isActive ? 'text-primary font-semibold' : 'text-foreground/50 font-medium'}`}
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
  /** When true, active state doesn’t add background so a parent sliding indicator can show it */
  transparentActiveBg?: boolean;
  elevateContent?: boolean;
  revealProgress?: SharedValue<number>;
}

const SegmentButton: React.FC<SegmentButtonProps> = ({
  icon,
  label,
  onPress,
  elevateContent = false,
  revealProgress,
}) => {
  const animatedElevationStyle = useAnimatedStyle(() => {
    if (!revealProgress) return { zIndex: 0, opacity: 1 };
    const p = revealProgress.value;
    return {
      zIndex: Math.round(interpolate(p, [0, 1], [0, 200])),
      position: 'relative' as const,
      opacity: interpolate(p, [0, 1], [0.7, 1]),
    };
  });

  return (
    <Animated.View
      style={[
        { flex: 1 },
        revealProgress ? animatedElevationStyle : { zIndex: 0 },
      ]}
    >
      <Pressable
        onPress={onPress}
        className="flex-1 flex-row items-center justify-center py-3 px-4 rounded-xl"
      >
        <Icon as={icon} size="sm" />
        <Text className="ml-2 text-sm">{label}</Text>
      </Pressable>
    </Animated.View>
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
    activeIconClass: 'text-primary',
  },
  {
    mode: 'dark',
    icon: Moon,
    label: 'Dark',
    activeIconClass: 'text-primary',
  },
];

const ANIMATION_DURATION = 400;
const INDICATOR_EASING = Easing.out(Easing.ease);

const REVEAL_DURATION_MS = 300;

const AppearanceSegmentedControl: React.FC = () => {
  const { isDark, colorMode, setColorMode } = useAppTheme();
  const [labelsOnTop, setLabelsOnTop] = useState(true);
  const segmentWidth = useSharedValue(0);
  const indicatorPosition = useSharedValue(colorMode === 'dark' ? 1 : 0);
  const transitionProgress = useSharedValue(1);
  const labelsRevealProgress = useSharedValue(1);

  const onSlideComplete = () => {
    setLabelsOnTop(true);
    labelsRevealProgress.value = withTiming(1, {
      duration: REVEAL_DURATION_MS,
      easing: Easing.out(Easing.ease),
    });
  };

  useEffect(() => {
    setLabelsOnTop(false);
    labelsRevealProgress.value = 0;
    transitionProgress.value = 0;
    const target = colorMode === 'dark' ? 1 : 0;
    indicatorPosition.value = withTiming(target, {
      duration: ANIMATION_DURATION,
      easing: INDICATOR_EASING,
    });
    transitionProgress.value = withTiming(
      1,
      { duration: ANIMATION_DURATION, easing: INDICATOR_EASING },
      (finished) => {
        if (finished) runOnJS(onSlideComplete)();
      }
    );
  }, [colorMode]);

  const onSegmentLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    segmentWidth.value = width / 2;
  };

  const indicatorStyle = useAnimatedStyle(() => {
    // const opacity = interpolate(transitionProgress.value, [0, 1], [0.9, 0.5]);
    const scale = interpolate(transitionProgress.value, [0, 1], [1.5, 1]);
    return {
      // opacity,
      transform: [
        { translateX: indicatorPosition.value * (segmentWidth.value - 16) },
        { scale },
      ],
      width: segmentWidth.value,
    };
  });

  return (
    <Animated.View>
      <View
        className="flex-row rounded-xl p-4"
        style={{
          position: 'relative',
          backgroundColor: getColor('surface', isDark),
          ...createCardShadowStyle(isDark),
        }}
        onLayout={onSegmentLayout}
      >
        <AnimatedGlassView
          glassEffectStyle="clear"
          style={[
            {
              width: segmentWidth.value - 16,
              top: 16,
              left: 8,

              height: '100%',
              borderRadius: 100,
              position: 'absolute',
              zIndex: 100,
            },
            indicatorStyle,
          ]}
        ></AnimatedGlassView>

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
            transparentActiveBg
            elevateContent={labelsOnTop}
            revealProgress={labelsRevealProgress}
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
        <Icon as={icon} size="sm" className="text-primary" />
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
        <Text className="text-primary font-semibold">{config.name}</Text>
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
      className="px-5 max-w-screen-xl mx-auto"
      contentContainerClassName="pt-10 pb-10"
    >
      <VStack space="2xl" className="pb-10">
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(500).springify()}>
          <VStack space="xs">
            <Heading size="2xl" className="text-foreground">
              Appearance
            </Heading>
            <Text className="text-foreground/50 text-base">
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
            entering={FadeInDown.duration(200).delay(100)}
            style={{
              backgroundColor: getColor('surface', isDark),
              ...createCardShadowStyle(isDark),
              padding: 16,
              borderRadius: 16,
            }}
          >
            <View className="flex-row flex-wrap gap-2">
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
