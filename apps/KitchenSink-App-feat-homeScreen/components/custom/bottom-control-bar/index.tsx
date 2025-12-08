import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { memo, useCallback, useRef, useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useAppTheme } from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { Text } from '@/components/ui/text';
import { Icon, MoonIcon, SunIcon, SearchIcon } from '@/components/ui/icon';
import { PaletteIcon } from 'lucide-react-native';
import { ThemeName } from '@/constants/themes';

// Theme color mapping for the theme button indicator
const THEME_COLORS: Record<ThemeName, string[]> = {
  default: ['#121212', '#ffffff'],
  ocean: ['#06b6d4', '#0891b2'],
  forest: ['#22c55e', '#16a34a'],
  sunset: ['#f97316', '#ea580c'],
  lavender: ['#a855f7', '#9333ea'],
  cyber: ['#ec4899', '#db2777'],
  rose: ['#e11d48', '#be123c'],
};

export type ComponentItem = {
  title: string;
  path: string;
  count?: number;
  icon?: React.ComponentType<any>;
};

export interface BottomControlBarProps {
  /** Current label to display in the pill button */
  pillLabel?: string;
  /** Whether to show the pill button */
  showPill?: boolean;
  /** Callback when pill is pressed */
  onPillPress?: () => void;
  /** Components list for the component selection menu */
  components?: ComponentItem[];
  /** Current selected component */
  currentComponent?: ComponentItem;
  /** Callback when a component is selected from the menu */
  onComponentSelect?: (component: ComponentItem, index: number) => void;
  /** Custom bottom offset (defaults to 34) */
  bottomOffset?: number;
  /** Pill width (defaults to 200) */
  pillWidth?: number;
  /** Children to render instead of the default pill (for custom content) */
  children?: React.ReactNode;
}

const BottomControlBar = memo(
  ({
    pillLabel,
    showPill = true,
    onPillPress,
    components,
    currentComponent,
    onComponentSelect,
    bottomOffset = 34,
    pillWidth = 200,
    children,
  }: BottomControlBarProps) => {
    const router = useRouter();
    const [showComponentMenu, setShowComponentMenu] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Refs for measuring button positions
    const componentButtonRef = useRef<View>(null);
    const themeButtonRef = useRef<View>(null);
    const [componentButtonLayout, setComponentButtonLayout] = useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });
    const [themeButtonLayout, setThemeButtonLayout] = useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    const { isDark, toggleColorMode, currentTheme, setTheme, availableThemes } =
      useAppTheme();
    const { width, height } = useWindowDimensions();

    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const applyBlur = !reduceTransparencyEnabled;

    // Rotation animation for color mode toggle
    const colorModeRotation = useSharedValue(0);

    const colorModeAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ rotate: `${colorModeRotation.value}deg` }],
      };
    });

    const handleToggleColorMode = useCallback(() => {
      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      // Animate rotation 360 degrees
      colorModeRotation.value = withTiming(colorModeRotation.value + 360, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      });
      toggleColorMode();
    }, [toggleColorMode, colorModeRotation]);

    const handleThemeSelect = useCallback(
      (themeName: ThemeName) => {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setTheme(themeName);
        setShowThemeMenu(false);
      },
      [setTheme]
    );

    const filteredComponents = components
      ? searchQuery.trim()
        ? components.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : components
      : [];

    const handleComponentSelect = useCallback(
      (component: ComponentItem, index: number) => {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setShowComponentMenu(false);
        setSearchQuery('');

        // Navigate directly to the component page
        router.push(`/(home)/components/${component.path}` as any);

        // Still call the callback if provided (for any additional logic)
        onComponentSelect?.(component, index);
      },
      [router, onComponentSelect]
    );

    const handlePillPress = useCallback(() => {
      if (onPillPress) {
        onPillPress();
      } else if (components && components.length > 0) {
        setShowComponentMenu(true);
      }
    }, [onPillPress, components]);

    return (
      <>
        {/* Bottom Control Bar */}
        <View
          className="absolute left-0 right-0 items-center"
          style={{ bottom: bottomOffset }}
          pointerEvents="box-none"
        >
          <View className="flex-row items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <Pressable
              onPress={handleToggleColorMode}
              className="w-16 h-16 rounded-full border border-input dark:bg-input/[0.075] items-center justify-center"
            >
              <Animated.View style={colorModeAnimatedStyle}>
                <Icon
                  as={isDark ? SunIcon : MoonIcon}
                  className="text-foreground"
                  size="md"
                />
              </Animated.View>
            </Pressable>

            {/* Theme Selector Button */}
            <View
              ref={themeButtonRef}
              onLayout={() => {
                themeButtonRef.current?.measureInWindow((x, y, w, h) => {
                  setThemeButtonLayout({ x, y, width: w, height: h });
                });
              }}
            >
              <Pressable
                onPress={() => setShowThemeMenu(true)}
                className="w-16 h-16 rounded-full border border-input dark:bg-input/[0.075] items-center justify-center"
              >
                <Icon as={PaletteIcon} className="text-foreground" size="md" />
              </Pressable>
            </View>

            {/* Custom children or default pill */}
            {children ? (
              children
            ) : showPill ? (
              <View
                ref={componentButtonRef}
                onLayout={() => {
                  componentButtonRef.current?.measureInWindow((x, y, w, h) => {
                    setComponentButtonLayout({ x, y, width: w, height: h });
                  });
                }}
              >
                <Pressable
                  onPress={handlePillPress}
                  className="px-6 py-5 bg-primary rounded-full"
                  style={{
                    width: pillWidth,
                    shadowColor: isDark ? '#fff' : '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }}
                >
                  <Text className=" text-base text-primary-foreground font-medium text-center font-outfit">
                    {pillLabel}
                  </Text>
                </Pressable>
              </View>
            ) : null}
          </View>
        </View>

        {/* Component Selection Menu */}
        {components && components.length > 0 && (
          <Modal
            visible={showComponentMenu}
            transparent
            animationType="none"
            onRequestClose={() => {
              setShowComponentMenu(false);
              setSearchQuery('');
            }}
          >
            <View style={StyleSheet.absoluteFill}>
              {/* Minimal Blur Backdrop - Performance optimized */}
              <Pressable
                style={StyleSheet.absoluteFill}
                onPress={() => {
                  setShowComponentMenu(false);
                  setSearchQuery('');
                }}
              >
                {applyBlur ? (
                  <BlurView
                    intensity={5}
                    tint={isDark ? 'dark' : 'light'}
                    experimentalBlurMethod="dimezisBlurView"
                    style={StyleSheet.absoluteFill}
                  />
                ) : (
                  <View
                    style={[
                      StyleSheet.absoluteFill,
                      {
                        backgroundColor: isDark
                          ? 'rgba(0,0,0,0.4)'
                          : 'rgba(0,0,0,0.25)',
                      },
                    ]}
                  />
                )}
              </Pressable>

              {/* Menu Content - Positioned above the button */}
              <Animated.View
                entering={FadeIn.duration(50)
                  .springify()
                  .damping(40)
                  .stiffness(200)}
                exiting={FadeOut.duration(50)}
                className="absolute bg-background rounded-2xl"
                style={{
                  bottom: height - componentButtonLayout.y + 12,
                  right:
                    width -
                    componentButtonLayout.x -
                    componentButtonLayout.width,
                  width: Math.min(width - 32, 320),
                  maxHeight: height * 0.5,
                  shadowColor: isDark ? '#fff' : '#000',
                  shadowOffset: { width: 0, height: -4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 16,
                  elevation: 12,
                }}
              >
                {/* Search Input */}
                <View className="px-3 py-3 border-b border-outline-50">
                  <View className="flex-row items-center h-11 rounded-full border border-background-300 bg-background">
                    <View className="pl-3 justify-center items-center">
                      <Icon
                        as={SearchIcon}
                        className="text-typography-400"
                        size="sm"
                      />
                    </View>
                    <TextInput
                      placeholder="Search..."
                      placeholderTextColor="#9CA3AF"
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="flex-1 px-3 text-typography-900"
                      style={{ fontSize: 16 }}
                    />
                  </View>
                </View>

                {/* Component List */}
                <ScrollView
                  className="flex-1"
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                >
                  <View className="py-2 gap-1">
                    {filteredComponents.map((item, index) => (
                      <Pressable
                        key={item.path}
                        onPress={() => handleComponentSelect(item, index)}
                        className={`px-3 py-2.5 mx-1.5 rounded-lg flex-row items-center gap-2.5 ${
                          currentComponent?.path === item.path
                            ? 'bg-primary-100'
                            : 'active:bg-background-50'
                        }`}
                      >
                        <Text
                          className={`text-sm font-medium ${
                            currentComponent?.path === item.path
                              ? 'text-primary-700'
                              : 'text-typography-700'
                          }`}
                        >
                          {item.title}
                        </Text>
                      </Pressable>
                    ))}
                    {filteredComponents.length === 0 && (
                      <View className="py-6 items-center">
                        <Text className="text-typography-400 text-sm">
                          No components found
                        </Text>
                      </View>
                    )}
                  </View>
                </ScrollView>
              </Animated.View>
            </View>
          </Modal>
        )}

        {/* Theme Selection Menu */}
        <Modal
          visible={showThemeMenu}
          transparent
          animationType="none"
          onRequestClose={() => setShowThemeMenu(false)}
        >
          <View style={StyleSheet.absoluteFill} className="items-center">
            {/* Minimal Blur Backdrop - Performance optimized */}
            <Pressable
              style={StyleSheet.absoluteFill}
              onPress={() => setShowThemeMenu(false)}
            >
              {applyBlur ? (
                <BlurView
                  intensity={5}
                  tint={isDark ? 'dark' : 'light'}
                  experimentalBlurMethod="dimezisBlurView"
                  style={StyleSheet.absoluteFill}
                />
              ) : (
                <View
                  style={[
                    StyleSheet.absoluteFill,
                    {
                      backgroundColor: isDark
                        ? 'rgba(0,0,0,0.4)'
                        : 'rgba(0,0,0,0.25)',
                    },
                  ]}
                />
              )}
            </Pressable>

            {/* Menu Content - Positioned above the button */}
            <Animated.View
              entering={FadeIn.duration(50)
                .springify()
                .damping(40)
                .stiffness(200)}
              exiting={FadeOut.duration(50)}
              className="absolute bg-background rounded-[38px] p-4"
              style={{
                bottom: height - themeButtonLayout.y + 12,
                width: Math.min(width - 80),
                shadowColor: isDark ? '#fff' : '#000',
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.15,
                shadowRadius: 16,
                elevation: 12,
              }}
            >
              {/* Theme List */}
              <View className="gap-4">
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="py-1 flex-row"
                >
                  {availableThemes.map((theme) => {
                    const colors =
                      THEME_COLORS[theme.name] || THEME_COLORS.default;
                    return (
                      <Pressable
                        key={theme.name}
                        onPress={() => handleThemeSelect(theme.name)}
                        className={`px-3 py-2 rounded-full w-fit mx-1 ${
                          currentTheme === theme.name
                            ? 'bg-background-50'
                            : 'active:bg-background-100'
                        }`}
                      >
                        <LinearGradient
                          colors={colors as [string, string]}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                          }}
                        />
                      </Pressable>
                    );
                  })}
                </ScrollView>
                <View className="w-auto items-center border border-black/50 dark:border-white/50 rounded-full py-4 mx-4">
                  <Text className="capitalize">{currentTheme}</Text>
                </View>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </>
    );
  }
);

BottomControlBar.displayName = 'BottomControlBar';

export { BottomControlBar };
