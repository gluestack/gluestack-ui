import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useAppTheme } from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from 'react-native-reanimated';

import {
  BottomControlBar,
  type ComponentItem,
} from '@/components/custom/bottom-control-bar';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { COMPONENTS_LIST } from '@/constants/components-list';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// Cards gradient colors
const GRADIENT_COLORS = [
  ['#3497D266', '#3497D2'] as const,
  ['#C94AB480', '#C94AB4'] as const,
  ['#4facfe', '#3497D2'] as const,
  ['#26AF5F80', '#26AF5F'] as const,
  ['#fa709a', '#fee140'] as const,
  ['#30cfd0', '#330867'] as const,
  ['#a8edea', '#fed6e3'] as const,
  ['#ff9a9e', '#fecfef'] as const,
  ['#ffecd2', '#fcb69f'] as const,
  ['#ff6e7f', '#bfe9ff'] as const,
  ['#e0c3fc', '#8ec5fc'] as const,
  ['#f093fb', '#f5576c'] as const,
  ['#fbc2eb', '#a6c1ee'] as const,
  ['#fdcbf1', '#e6dee9'] as const,
  ['#a1c4fd', '#c2e9fb'] as const,
  ['#d299c2', '#fef9d7'] as const,
  ['#667eea', '#764ba2'] as const,
  ['#fa709a', '#fee140'] as const,
  ['#30cfd0', '#330867'] as const,
  ['#43e97b', '#38f9d7'] as const,
  ['#4facfe', '#00f2fe'] as const,
];

const components = COMPONENTS_LIST;

type ComponentCardProps = {
  item: ComponentItem;
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
          alignItems: 'center',
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
            style={{ width: '100%', height: '100%' }}
          >
            <Card className="flex-1 justify-center p-8 pr-0 overflow-hidden max-h-[400px] rounded-3xl border-0">
              <AnimatedLinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
              />
              <View className="flex-1 justify-between">
                <Text className="text-white font-sans text-8xl font-bold opacity-30 leading-[1.1] tracking-tighter">
                  {displayIndex.toString()}
                </Text>
                {item.icon && (
                  <Icon as={item.icon} className="h-32 w-full stroke-none" />
                )}
                <View className="gap-1">
                  <Text className="text-white font-sans text-2xl font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-slate-50 text-sm font-sans">
                    {item.count}  Variants
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

ComponentCard.displayName = 'ComponentCard';

export default function ComponentsTab() {
  const router = useRouter();
  const [currentComponent, setCurrentComponent] = useState<ComponentItem>(
    components[0]!
  );

  const { isDark } = useAppTheme();
  const { width, height } = useWindowDimensions();

  const ITEM_WIDTH = width > 680 ? width * 0.3 : width * 0.6;
  const SPACING = 5;
  const SIDE_OFFSET = (width - ITEM_WIDTH) / 2 - SPACING / 2;
  const CONTENT_HEIGHT = height * 0.75;

  const { reduceTransparencyEnabled } = useAccessibilityInfo();
  const applyBlur = !reduceTransparencyEnabled && Platform.OS === 'ios';

  const listRef = useRef<FlatList<ComponentItem>>(null);
  const isNavigatingRef = useRef(false);

  // Reset navigation guard when screen comes back into focus
  useFocusEffect(
    useCallback(() => {
      isNavigatingRef.current = false;
    }, [])
  );

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<{ item: ComponentItem }> }) => {
      if (viewableItems.length > 0 && viewableItems[0]) {
        if (Platform.OS === 'ios') {
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

  const Header = useMemo(() => {
    return (
      <View className="items-center justify-center z-10 mt-20 gap-2">
        <HStack className="items-center gap-2">
          <Image
            source={{
              uri: isDark
                ? 'https://i.imgur.com/EUqtUMu.png'
                : 'https://i.imgur.com/9bvua6C.png',
            }}
            alt="Kitchensink App Logo"
            className="h-6 w-6"
          />
          <Text className="text-2xl font-bold font-sans">Kitchensink App</Text>
        </HStack>
        <Text className="max-w-[80%] text-foreground/80 text-center font-serif">
          Demo app showcasing all the gluestack ui components in action.
        </Text>
      </View>
    );
  }, [isDark]);

  const handleCardPress = useCallback(
    (path: string) => {
      // Prevent multiple rapid navigations
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;

      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      router.push(`/(home)/components/${path}` as any);
    },
    [router]
  );

  const handleComponentSelect = useCallback(
    (component: ComponentItem, index: number) => {
      // Find original index in components array
      const originalIndex = components.findIndex(
        (c) => c.path === component.path
      );
      if (originalIndex !== -1) {
        // Delay scrolling by 1 second
        setTimeout(() => {
          listRef.current?.scrollToIndex({
            index: originalIndex,
            animated: true,
          });
        }, 1000);
        setCurrentComponent(component);
      }
    },
    []
  );

  return (
    <View className="flex-1 bg-background">
      {Header}
      <BottomControlBar
        pillLabel={currentComponent.title}
        components={components}
        currentComponent={currentComponent}
        onComponentSelect={handleComponentSelect}
      />
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
        overScrollMode="never"
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
        />
      )}
    </View>
  );
}
