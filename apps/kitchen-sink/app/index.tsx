import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  FadeIn,
  FadeOut,
  type SharedValue,
} from "react-native-reanimated";
import { useAppTheme } from "@/contexts/app-theme-context";
import { useAccessibilityInfo } from "@/helpers/use-accessability-info";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Icon, MoonIcon, SunIcon, SearchIcon } from "@/components/ui/icon";
import { PaletteIcon } from "lucide-react-native";
import {
  AccordionIcon,
  AlertDialogIcon,
  AlertIcon,
  AvatarIcon,
} from "@/components/custom/custom-icons";
import { Image } from "@/components/ui/image";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { ThemeName } from "@/constants/themes";
import componentsList from "@/constants/components.json";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// Vibrant gradient color combinations that work well with white text
const GRADIENT_COLORS = [
  ["#3497D266", "#3497D2"] as const,
  ["#C94AB480", "#C94AB4"] as const,
  ["#4facfe", "#3497D2"] as const,
  ["#26AF5F80", "#26AF5F"] as const,
  ["#fa709a", "#fee140"] as const,
  ["#30cfd0", "#330867"] as const,
  ["#a8edea", "#fed6e3"] as const,
  ["#ff9a9e", "#fecfef"] as const,
  ["#ffecd2", "#fcb69f"] as const,
  ["#ff6e7f", "#bfe9ff"] as const,
  ["#e0c3fc", "#8ec5fc"] as const,
  ["#f093fb", "#f5576c"] as const,
  ["#fbc2eb", "#a6c1ee"] as const,
  ["#fdcbf1", "#e6dee9"] as const,
  ["#a1c4fd", "#c2e9fb"] as const,
  ["#d299c2", "#fef9d7"] as const,
  ["#667eea", "#764ba2"] as const,
  ["#fa709a", "#fee140"] as const,
  ["#30cfd0", "#330867"] as const,
  ["#43e97b", "#38f9d7"] as const,
  ["#4facfe", "#00f2fe"] as const,
];

// Icon mapping for components
const COMPONENT_ICONS: Record<string, React.ComponentType<any>> = {
  accordion: AccordionIcon,
  alert: AlertIcon,
  "alert-dialog": AlertDialogIcon,
  avatar: AvatarIcon,
};

type Component = {
  title: string;
  path: string;
  count: number;
  icon?: React.ComponentType<any>;
};

// Get all components directly from the generated components.json array
const components = (componentsList as Component[]).map((component) => ({
  ...component,
  icon: COMPONENT_ICONS[component.path.toLowerCase()],
}));

type ComponentCardProps = {
  item: Component;
  index: number;
  displayIndex: number;
  scrollX: SharedValue<number>;
  itemWidth: number;
  spacing: number;
  height: number;
  onPress: () => void;
};

const ComponentCard = memo(
  ({
    item,
    index,
    displayIndex,
    scrollX,
    itemWidth,
    spacing,
    height,
    onPress,
  }: ComponentCardProps) => {
    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const { isDark } = useAppTheme();
    const applyOpacity = reduceTransparencyEnabled;

    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * (itemWidth + spacing),
        index * (itemWidth + spacing),
        (index + 1) * (itemWidth + spacing),
      ];

      return {
        opacity: applyOpacity
          ? interpolate(
              scrollX.get(),
              inputRange,
              [0.6, 1, 0.6],
              Extrapolation.CLAMP
            )
          : 1,
        transform: [
          {
            scale: interpolate(
              scrollX.get(),
              inputRange,
              [0.8, 1.1, 0.8],
              Extrapolation.CLAMP
            ),
          },
        ],
      };
    });

    const gradientColors = GRADIENT_COLORS[index % GRADIENT_COLORS.length];

    return (
      <View
        style={{
          width: itemWidth + spacing,
          height,
          paddingTop: 100,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={[
            {
              width: itemWidth,
              height: height * 0.55,
            },
            animatedStyle,
          ]}
        >
          <Pressable
            onPress={onPress}
            style={{ width: "100%", height: "100%" }}
          >
            <Card className="flex-1 justify-center p-8 pr-0 overflow-hidden max-h-[400px] rounded-2xl">
              <AnimatedLinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
              />
              <View className="flex-1 justify-between">
                <Text className="text-white text-8xl font-bold font-outfit opacity-30 leading-[1.1] tracking-tighter">
                  {displayIndex.toString()}
                </Text>
                {item.icon && (
                  <Icon as={item.icon} className="h-32 w-full stroke-none" />
                )}
                <View className="gap-1">
                  <Text className="text-white text-2xl font-bold font-outfit">
                    {item.title}
                  </Text>
                  <Text className="text-slate-50 text-sm font-andika">
                    {item.count} Variants
                  </Text>
                </View>
              </View>
            </Card>
          </Pressable>
        </Animated.View>
      </View>
    );
  }
);

ComponentCard.displayName = "ComponentCard";

// Theme color mapping for the theme button indicator
const THEME_COLORS: Record<ThemeName, string[]> = {
  default: ["#6366f1", "#8b5cf6"],
  ocean: ["#06b6d4", "#0891b2"],
  forest: ["#22c55e", "#16a34a"],
  sunset: ["#f97316", "#ea580c"],
  lavender: ["#a855f7", "#9333ea"],
  cyber: ["#ec4899", "#db2777"],
  rose: ["#e11d48", "#be123c"],
};

export default function ComponentsTab() {
  const router = useRouter();
  const [currentComponent, setCurrentComponent] = useState<Component>(
    components[0]!
  );
  const [showComponentMenu, setShowComponentMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const ITEM_WIDTH = width * 0.6;
  const SPACING = 5;
  const SIDE_OFFSET = (width - ITEM_WIDTH) / 2 - SPACING / 2;
  const CONTENT_HEIGHT = height * 0.75;

  const { reduceTransparencyEnabled } = useAccessibilityInfo();
  const applyBlur = !reduceTransparencyEnabled;

  const listRef = useRef<FlatList<Component>>(null);

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<{ item: Component }> }) => {
      if (viewableItems.length > 0 && viewableItems[0]) {
        if (Platform.OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setCurrentComponent(viewableItems[0].item);
      }
    },
    []
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.set(event.contentOffset.x);
    },
  });

  const animatedProps = useAnimatedProps(() => {
    if (components.length === 1) {
      return { intensity: 0 };
    }

    const inputRange: number[] = [];
    const outputRange: number[] = [];

    for (let i = 0; i < components.length; i++) {
      inputRange.push(i * (ITEM_WIDTH + SPACING));
      outputRange.push(0);

      if (i < components.length - 1) {
        inputRange.push((i + 0.5) * (ITEM_WIDTH + SPACING));
        outputRange.push(30);
      }
    }

    return {
      intensity: interpolate(scrollX.get(), inputRange, outputRange),
    };
  });

  const Header = () => {
    return (
      <View className="items-center justify-center z-10 mt-10 gap-2">
        <HStack className="items-center gap-2">
          <Image
            source={{
              uri: isDark
                ? "https://i.imgur.com/EUqtUMu.png"
                : "https://i.imgur.com/9bvua6C.png",
            }}
            alt="Kitchensink App Logo"
            className="h-6 w-6"
          />
          <Text className="text-typography-900 text-2xl font-bold font-andika">
            Kitchensink App
          </Text>
        </HStack>
        <Text className="max-w-[60%] text-center">
          Demo app showcasing all the gluestack ui components in action.
        </Text>
      </View>
    );
  };

  const handleCardPress = useCallback(
    (path: string) => {
      if (Platform.OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      router.push(`/components/${path}` as any);
    },
    [router]
  );

  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) return components;
    return components.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleComponentSelect = useCallback(
    (component: Component, index: number) => {
      setShowComponentMenu(false);
      setSearchQuery("");
      // Find original index in components array
      const originalIndex = components.findIndex(
        (c) => c.path === component.path
      );
      if (originalIndex !== -1) {
        listRef.current?.scrollToIndex({
          index: originalIndex,
          animated: true,
        });
        setCurrentComponent(component);
      }
    },
    []
  );

  const handleThemeSelect = useCallback(
    (themeName: ThemeName) => {
      if (Platform.OS === "ios") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      setTheme(themeName);
      setShowThemeMenu(false);
    },
    [setTheme]
  );

  // Rotation animation for color mode toggle
  const colorModeRotation = useSharedValue(0);

  const colorModeAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${colorModeRotation.value}deg` }],
    };
  });

  const handleToggleColorMode = useCallback(() => {
    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    // Animate rotation 360 degrees
    colorModeRotation.value = withTiming(colorModeRotation.value + 360, {
      duration: 500,
      easing: Easing.out(Easing.cubic),
    });
    toggleColorMode();
  }, [toggleColorMode, colorModeRotation]);

  return (
    <View className="flex-1">
      <Header />
      <Animated.FlatList
        ref={listRef}
        data={components}
        renderItem={({ item, index }) => (
          <ComponentCard
            item={item}
            index={index}
            displayIndex={index + 1}
            scrollX={scrollX}
            itemWidth={ITEM_WIDTH}
            spacing={SPACING}
            height={CONTENT_HEIGHT}
            onPress={() => handleCardPress(item.path)}
          />
        )}
        keyExtractor={(item) => item.path}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + SPACING,
          offset: (ITEM_WIDTH + SPACING) * index,
          index,
        })}
        horizontal
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: SIDE_OFFSET,
        }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
      />
      {applyBlur && (
        <AnimatedBlurView
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          animatedProps={animatedProps}
          tint={
            isDark
              ? "systemUltraThinMaterialDark"
              : "systemUltraThinMaterialLight"
          }
        />
      )}
      {/* Bottom Control Bar */}
      <View
        className="absolute left-0 right-0 items-center"
        style={{ bottom: 34 }}
        pointerEvents="box-none"
      >
        <View className="flex-row items-center gap-3">
          {/* Dark/Light Mode Toggle */}
          <Pressable
            onPress={handleToggleColorMode}
            className="w-16 h-16 rounded-full bg-background-0 items-center justify-center"
            style={{
              shadowColor: isDark ? "#fff" : "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Animated.View style={colorModeAnimatedStyle}>
              <Icon
                as={isDark ? SunIcon : MoonIcon}
                className="text-typography-700"
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
              className="w-16 h-16 rounded-full bg-background-0 items-center justify-center"
              style={{
                shadowColor: isDark ? "#fff" : "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Icon
                as={PaletteIcon}
                className="text-typography-700"
                size="md"
              />
            </Pressable>
          </View>

          {/* Component Selector Pill */}
          <View
            ref={componentButtonRef}
            onLayout={() => {
              componentButtonRef.current?.measureInWindow((x, y, w, h) => {
                setComponentButtonLayout({ x, y, width: w, height: h });
              });
            }}
          >
            <Pressable
              onPress={() => setShowComponentMenu(true)}
              className="px-6 py-5 bg-typography-900 rounded-full w-[200px]"
              style={{
                shadowColor: isDark ? "#fff" : "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text className="text-typography-0 text-base font-medium text-center font-outfit">
                {currentComponent.title}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Component Selection Menu */}
      <Modal
        visible={showComponentMenu}
        transparent
        animationType="none"
        onRequestClose={() => {
          setShowComponentMenu(false);
          setSearchQuery("");
        }}
      >
        <View style={StyleSheet.absoluteFill}>
          {/* Minimal Blur Backdrop - Performance optimized */}
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => {
              setShowComponentMenu(false);
              setSearchQuery("");
            }}
          >
            {applyBlur ? (
              <BlurView
                intensity={5}
                tint={isDark ? "dark" : "light"}
                experimentalBlurMethod="dimezisBlurView"
                style={StyleSheet.absoluteFill}
              />
            ) : (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    backgroundColor: isDark
                      ? "rgba(0,0,0,0.4)"
                      : "rgba(0,0,0,0.25)",
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
            className="absolute bg-background-0 rounded-2xl"
            style={{
              bottom: height - componentButtonLayout.y + 12,
              right:
                width - componentButtonLayout.x - componentButtonLayout.width,
              width: Math.min(width - 32, 320),
              maxHeight: height * 0.5,
              shadowColor: isDark ? "#fff" : "#000",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.15,
              shadowRadius: 16,
              elevation: 12,
            }}
          >
            {/* Search Input */}
            <View className="px-3 py-3 border-b border-outline-50">
              <Input variant="rounded" size="lg">
                <InputSlot className="pl-3">
                  <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField
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
                      currentComponent.path === item.path
                        ? "bg-primary"
                        : "active:bg-background-50"
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        currentComponent.path === item.path
                          ? "text-primary-700"
                          : "text-typography-700"
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
                tint={isDark ? "dark" : "light"}
                experimentalBlurMethod="dimezisBlurView"
                style={StyleSheet.absoluteFill}
              />
            ) : (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    backgroundColor: isDark
                      ? "rgba(0,0,0,0.4)"
                      : "rgba(0,0,0,0.25)",
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
              .stiffness(200)
            }
            exiting={FadeOut.duration(50)}
            className="absolute bg-background-0 rounded-[38px] p-4"
            style={{
              bottom: height - themeButtonLayout.y + 12,
              width: Math.min(width - 80),
              shadowColor: isDark ? "#fff" : "#000",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.15,
              shadowRadius: 16,
              elevation: 12,
            }}
          >
            {/* Theme List */}
            <View className="gap-4">
              <ScrollView horizontal className="py-1 flex-row gap-2">
                {availableThemes.map((theme) => {
                  const colors =
                    THEME_COLORS[theme.name] || THEME_COLORS.default;
                  return (
                    <Pressable
                      key={theme.name}
                      onPress={() => handleThemeSelect(theme.name)}
                      className={`px-3 py-2 rounded-full w-fit ${
                        currentTheme === theme.name
                          ? "bg-background-50"
                          : "active:bg-background-100"
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
    </View>
  );
}
