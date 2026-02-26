import { Icon, MoonIcon, SearchIcon, SunIcon } from '@/components/ui/icon';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { ThemeName } from '@/constants/themes';
import { useAppTheme } from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { BlurView } from 'expo-blur';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { GlassView } from '@/components/ui/liquid-glass';
import * as Haptics from 'expo-haptics';
import { usePathname, useRouter } from 'expo-router';
import { PaletteIcon, Search } from 'lucide-react-native';
import { styled } from 'nativewind';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, {
  Easing,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedGlassView = Animated.createAnimatedComponent(GlassView);
const StyledAnimatedView = styled(AnimatedView, { className: 'style' });
// Theme color mapping for the theme button indicator
const THEME_COLORS: Record<ThemeName, string[]> = {
  default: ['#3b82f6', '#8b5cf6'], // Blue to purple gradient
  vercel: ['#000000', '#525252'], // Black to gray gradient
  violetBloom: ['#7033ff', '#8c5cff'], // Purple gradient
  supabase: ['#72e3ad', '#10b981'], // Mint green to emerald gradient
  claude: ['#c96442', '#d97757'], // Terracotta gradient
  twitter: ['#1e9df1', '#1da1f2'], // Twitter blue gradient
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
    bottomOffset = 24,
    pillWidth = 200,
    children,
  }: BottomControlBarProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [showComponentMenu, setShowComponentMenu] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Refs for measuring button positions
    const componentButtonRef = useRef<View>(null);
    const themeButtonRef = useRef<View>(null);
    const searchInputRef = useRef<any>(null);
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
    const insets = useSafeAreaInsets();
    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const applyBlur = !reduceTransparencyEnabled && Platform.OS !== 'web';
 const supportsLiquidGlass = isLiquidGlassAvailable();
    // Autofocus search input when component menu opens
    useEffect(() => {
      if (showComponentMenu) {
        // Add a small delay to ensure the modal is fully rendered
        const timer = setTimeout(() => {
          searchInputRef.current?.focus();
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [showComponentMenu]);

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
        if(component.path.includes('showcase')) {
          router.push(`/(home)/showcases/${component.path}` as any);
        } else {
          router.push(`/(home)/components/${component.path}` as any);
        }
      },
      [router, pathname]
    );

    const handlePillPress = useCallback(() => {
      if (onPillPress) {
        onPillPress();
      } else if (components && components.length > 0) {
        setShowComponentMenu(true);
      }
    }, [onPillPress, components]);

    const bottom = supportsLiquidGlass || Platform.OS === "web"
  ? bottomOffset : insets.bottom;

    return (
      <>
        {/* Bottom Control Bar */}
        <View
          className="absolute z-[20] justify-between flex-row px-4 left-0 right-0 items-center"
          style={{ bottom: bottom }}
          pointerEvents="box-none"
        >
          <View className="flex-row items-center w-full justify-between gap-3">
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
                className={`${supportsLiquidGlass ? '' : 'border border-input dark:bg-muted/5 bg-background'} shadow-hard-5 rounded-full`}
              >
                <GlassView
                  glassEffectStyle="clear"
                  className='w-14 h-14 rounded-full justify-center items-center'
                  isInteractive
                >
                  <Icon
                    as={PaletteIcon}
                    className="text-foreground"
                    size="md"
                  />
                </GlassView>
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
              
                className={`${supportsLiquidGlass ? '' : 'border border-input dark:bg-muted/5 bg-background'}  shadow-hard-5 rounded-full`}
              >
                <GlassView
                  glassEffectStyle="clear"
                  className='w-14 h-14 rounded-full justify-center items-center'
                  isInteractive
                >
                  <Pressable
                    onPress={handlePillPress}
                    className="px-6 py-5 rounded-full"
                  >
                    <Icon as={Search} size="md" />
                  </Pressable>
                </GlassView>
              </View>
            ) : null}
          </View>
        </View>

        {/* Component Selection Menu */}
        {components && components.length > 0 && (
          <Modal
            visible={showComponentMenu}
            transparent
            animationType="fade"
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
              <StyledAnimatedView
                className={`${supportsLiquidGlass ? 'bg-tranparent' : 'bg-background border border-input'} absolute rounded-2xl`}
                entering={ZoomIn.duration(200).withInitialValues({
                  transform: [{ scale: 0.9 }],
                  opacity: 0,
                })}
                exiting={FadeOut.duration(200)}
                style={{
                  bottom: height - componentButtonLayout.y + 12,
                  right:
                    width -
                    componentButtonLayout.x -
                    componentButtonLayout.width,
                  width: (width * 2) / 3,
                  maxHeight: height * 0.5,
                  shadowColor: isDark ? '#fff' : '#000',
                  shadowOffset: { width: 0, height: -4 },
                  shadowOpacity: 0.05,
                  shadowRadius: 16,
                  elevation: 12,
                }}
              >
                <GlassView
                  glassEffectStyle="regular"
                  style={{ width: '100%', height: '100%', borderRadius: 16 }}
                >
                  {/* Search Input */}
                  <View className="px-3 py-3 border-b border-foreground/10">
                    <Input className="flex-row items-center h-11 data-[focus=true]:border-foreground/10 rounded-full border border-foreground/10 relative ">
                      <InputSlot className="pl-3 justify-center items-center">
                        <Icon as={SearchIcon} size="sm" />
                      </InputSlot>
                      <InputField
                        ref={searchInputRef}
                        placeholder="Search..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </Input>
                  </View>

                  <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    {/* Component List */}
                    {/* <ScrollView
                  className="flex-1"
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                > */}
                    <View className="py-2 gap-1">
                      {filteredComponents.map((item, index) => (
                        <Pressable
                          key={item.path}
                          onPress={() => handleComponentSelect(item, index)}
                          className={`px-3 py-2.5 mx-1.5 rounded-lg flex-row items-center gap-2.5 ${
                            currentComponent?.path === item.path
                              ? 'bg-secondary/70'
                              : 'active:bg-primary/10'
                          }`}
                        >
                          <Text
                            className={`text-sm font-medium ${
                              currentComponent?.path === item.path
                                ? 'text-secondary-foreground'
                                : ''
                            }`}
                          >
                            {item.title}
                          </Text>
                        </Pressable>
                      ))}
                      {filteredComponents.length === 0 && (
                        <Text className="text-foreground text-sm p-2.5 text-center">
                          No components found
                        </Text>
                      )}
                    </View>
                    {/* </ScrollView> */}
                  </KeyboardAwareScrollView>
                </GlassView>
              </StyledAnimatedView>
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
            <StyledAnimatedView
              entering={ZoomIn.duration(200).withInitialValues({
                transform: [{ scale: 0.9 }],
              })}
              className={`absolute rounded-3xl ${supportsLiquidGlass ? 'bg-tranparent' : 'bg-background border border-input'}`}
              style={{
                bottom: height - themeButtonLayout.y + 12,
                width: width * 0.9,
              }}
            >
              <GlassView
                glassEffectStyle="regular"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 16,
                  padding: 16,
                  gap: 16,
                }}
              >
                {/* Theme Content */}

                {/* Dark/Light Mode Toggle */}
                <View className="items-center">
                  <Pressable
                    onPress={() => {
                      setShowThemeMenu(false);
                      handleToggleColorMode();
                    }}
                  >
                    <View className="border border-foreground/10 rounded-full p-4">
                      <Icon
                        as={isDark ? SunIcon : MoonIcon}
                        className="text-foreground"
                        size="md"
                      />
                    </View>
                  </Pressable>
                  <Text className="text-foreground/60 font-outfit text-sm mt-2">
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </Text>
                </View>

                {/* Divider */}
                <View className="h-px bg-foreground/10" />

                {/* Color Palettes */}
                <View className="flex-row justify-center gap-3">
                  {availableThemes
                    .filter((theme) => theme.name !== 'default')
                    .map((theme) => {
                      const colors =
                        THEME_COLORS[theme.name] || THEME_COLORS.default;
                      const isSelected = currentTheme === theme.name;
                      return (
                        <Pressable
                          key={theme.name}
                          onPress={() => handleThemeSelect(theme.name)}
                          className={`items-center justify-center ${
                            isSelected ? 'opacity-100' : 'opacity-60'
                          }`}
                        >
                          <View
                            className="rounded-full"
                            style={{
                              width: 52,
                              height: 52,
                              backgroundColor: colors[0],
                              borderWidth: isSelected ? 3 : 0,
                              borderColor: isDark
                                ? 'rgba(255,255,255,0.3)'
                                : 'rgba(0,0,0,0.2)',
                            }}
                          />
                        </Pressable>
                      );
                    })}
                </View>

                {/* Current Theme Indicator */}
                <View className="items-center px-6 py-4 border border-foreground/10 rounded-full">
                  <Text className="text-foreground font-outfit font-medium text-base capitalize">
                    {currentTheme === 'default'
                      ? 'Default'
                      : currentTheme === 'violetBloom'
                        ? 'Violet Bloom'
                        : currentTheme === 'twitter'
                          ? 'Twitter'
                          : currentTheme}
                  </Text>
                </View>

                {/* Reset to Default Button */}
                <Pressable
                  onPress={() => handleThemeSelect('default')}
                  className="py-3 items-center active:opacity-70"
                >
                  <Text className="text-foreground font-outfit font-medium text-base">
                    Reset to Default
                  </Text>
                </Pressable>
              </GlassView>
            </StyledAnimatedView>
          </View>
        </Modal>
      </>
    );
  }
);

BottomControlBar.displayName = 'BottomControlBar';

export { BottomControlBar };
