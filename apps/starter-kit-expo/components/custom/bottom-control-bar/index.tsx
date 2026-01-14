import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
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
import {
  useAppTheme,
  ThemeBase,
  THEME_CONFIGS,
} from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { Text } from '@/components/ui/text';
import { Icon, MoonIcon, SunIcon, SearchIcon } from '@/components/ui/icon';
import { PaletteIcon, CheckIcon } from 'lucide-react-native';
import { Input, InputField, InputSlot } from '@/components/ui/input';

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

    const {
      isDark,
      toggleColorMode,
      themeBase,
      setThemeBase,
      availableThemes,
      currentThemeConfig,
    } = useAppTheme();

    const { width, height } = useWindowDimensions();

    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const applyBlur = !reduceTransparencyEnabled;

    // Autofocus search input when component menu opens
    useEffect(() => {
      if (showComponentMenu) {
        const timer = setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
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
      colorModeRotation.value = withTiming(colorModeRotation.value + 360, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      });
      toggleColorMode();
    }, [toggleColorMode, colorModeRotation]);

    const handleThemeSelect = useCallback(
      (newTheme: ThemeBase) => {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setThemeBase(newTheme);
        setShowThemeMenu(false);
      },
      [setThemeBase]
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
        router.replace(`/(home)/components/${component.path}` as any);
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
              className="w-16 h-16 rounded-full border border-input/70 bg-background items-center justify-center"
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
                className="w-16 h-16 rounded-full border border-input/70 bg-background items-center justify-center"
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
                  style={{ width: pillWidth }}
                >
                  <Text className="text-base font-sans text-primary-foreground font-medium text-center">
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
              {/* Backdrop */}
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

              {/* Menu Content */}
              <Animated.View
                entering={FadeIn.duration(200)
                  .springify()
                  .damping(40)
                  .stiffness(200)}
                exiting={FadeOut.duration(50)}
                className="absolute bg-popover border border-border rounded-2xl"
                style={{
                  bottom: height - componentButtonLayout.y + 12,
                  right:
                    width -
                    componentButtonLayout.x -
                    componentButtonLayout.width,
                  width: Math.min(350),
                  maxHeight: height * 0.5,
                  shadowColor: isDark ? '#fff' : '#000',
                  shadowOffset: { width: 0, height: -4 },
                  shadowOpacity: 0.05,
                  shadowRadius: 16,
                  elevation: 12,
                }}
              >
                {/* Search Input */}
                <View className="px-3 py-3 border-b border-input">
                  <Input className="flex-row items-center h-11 rounded-full border border-input bg-background">
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
                            ? 'bg-primary'
                            : 'active:bg-secondary'
                        }`}
                      >
                        <Text
                          className={`text-sm font-medium ${
                            currentComponent?.path === item.path
                              ? 'text-primary-foreground'
                              : 'text-foreground'
                          }`}
                        >
                          {item.title}
                        </Text>
                      </Pressable>
                    ))}
                    {filteredComponents.length === 0 && (
                      <View className="py-6 items-center">
                        <Text className="text-muted-foreground text-sm">
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
            {/* Backdrop */}
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

            {/* Menu Content */}
            <Animated.View
              entering={FadeIn.duration(200)
                .springify()
                .damping(40)
                .stiffness(200)}
              exiting={FadeOut.duration(50)}
              className="absolute bg-card rounded-3xl p-6"
              style={{
                bottom: height - themeButtonLayout.y + 12,
                width: Math.min(width - 48, 380),
              }}
            >
              {/* Theme Content */}
              <View className="gap-5">
                {/* Section Title */}
                <Text className="text-foreground text-lg font-semibold text-center">
                  Choose Theme
                </Text>

                {/* Theme Grid */}
                <View className="flex-row flex-wrap justify-center gap-3">
                  {availableThemes.map((theme) => {
                    const isSelected = themeBase === theme.base;
                    const themeColor = isDark
                      ? theme.colors.dark
                      : theme.colors.light;

                    return (
                      <Pressable
                        key={theme.base}
                        onPress={() => handleThemeSelect(theme.base)}
                        className="items-center"
                        style={{ width: 70 }}
                      >
                        <View
                          className="rounded-full items-center justify-center"
                          style={{
                            width: 52,
                            height: 52,
                            backgroundColor: themeColor,
                            borderWidth: isSelected ? 3 : 0,
                            borderColor: isDark
                              ? 'rgba(255,255,255,0.5)'
                              : 'rgba(0,0,0,0.3)',
                          }}
                        >
                          {isSelected && (
                            <Icon
                              as={CheckIcon}
                              size="sm"
                              style={{
                                color:
                                  theme.base === 'vercel'
                                    ? isDark
                                      ? '#000'
                                      : '#fff'
                                    : '#fff',
                              }}
                            />
                          )}
                        </View>
                        <Text
                          className={`text-xs mt-2 text-center ${
                            isSelected
                              ? 'text-foreground font-semibold'
                              : 'text-muted-foreground'
                          }`}
                          numberOfLines={1}
                        >
                          {theme.displayName}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>

                {/* Current Theme Info */}
                <View className="items-center px-4 py-3 bg-secondary/50 rounded-xl">
                  <Text className="text-foreground font-medium text-sm">
                    {currentThemeConfig.displayName} •{' '}
                    {isDark ? 'Dark' : 'Light'}
                  </Text>
                  <Text className="text-muted-foreground text-xs mt-1">
                    {currentThemeConfig.description}
                  </Text>
                </View>

                {/* Reset Button */}
                {themeBase !== 'default' && (
                  <Pressable
                    onPress={() => handleThemeSelect('default')}
                    className="py-2.5 items-center active:opacity-70"
                  >
                    <Text className="text-muted-foreground font-medium text-sm">
                      Reset to Default
                    </Text>
                  </Pressable>
                )}
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
