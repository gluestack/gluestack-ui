import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { memo, useCallback, useRef, useState } from 'react';
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
import { useAppTheme } from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { HStack } from '@/components/ui/hstack';
import {
  BottomControlBar,
  type ComponentItem,
} from '@/components/custom/bottom-control-bar';
import { SHOWCASES_LIST, type ShowcaseItem } from '@/constants/showcases-list';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// Cards gradient colors
const GRADIENT_COLORS = [
  ['#3497D266', '#3497D2'] as const,
  ['#C94AB480', '#C94AB4'] as const,
  ['#4facfe', '#3497D2'] as const,
  ['#26AF5F80', '#26AF5F'] as const,
  ['#fa709a', '#fee140'] as const,
];

const showcases = SHOWCASES_LIST;

type ShowcaseCardProps = {
  item: ShowcaseItem;
  index: number;
  displayIndex: number;
  scrollX: SharedValue<number>;
  itemWidth: number;
  spacing: number;
  height: number;
  onPress: () => void;
};

const ShowcaseCard = memo(
  ({
    item,
    index,
    displayIndex,
    scrollX,
    itemWidth,
    spacing,
    height,
    onPress,
  }: ShowcaseCardProps) => {
    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const { isDark, fontSans } = useAppTheme();
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
                <View className="gap-1 flex-1 justify-center">
                  <Text className="text-white font-sans text-2xl font-bold">
                    {item.title}
                  </Text>
                  <Text className="text-slate-50 text-sm">
                    {item.description || 'Showcase'}
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

ShowcaseCard.displayName = 'ShowcaseCard';

export default function ShowcasesTab() {
  const router = useRouter();
  const [currentShowcase, setCurrentShowcase] = useState<ShowcaseItem>(
    showcases[0]!
  );

  const { isDark } = useAppTheme();
  const { width, height } = useWindowDimensions();

  const ITEM_WIDTH = width * 0.6;
  const SPACING = 5;
  const SIDE_OFFSET = (width - ITEM_WIDTH) / 2 - SPACING / 2;
  const CONTENT_HEIGHT = height * 0.75;

  const { reduceTransparencyEnabled } = useAccessibilityInfo();
  const applyBlur = !reduceTransparencyEnabled;

  const listRef = useRef<FlatList<ShowcaseItem>>(null);
  const isNavigatingRef = useRef(false);

  // Reset navigation guard when screen comes back into focus
  useFocusEffect(
    useCallback(() => {
      isNavigatingRef.current = false;
    }, [])
  );

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<{ item: ShowcaseItem }> }) => {
      if (viewableItems.length > 0 && viewableItems[0]) {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setCurrentShowcase(viewableItems[0].item);
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
    if (showcases.length === 1) {
      return { intensity: 0 };
    }

    const inputRange: number[] = [];
    const outputRange: number[] = [];

    for (let i = 0; i < showcases.length; i++) {
      inputRange.push(i * (ITEM_WIDTH + SPACING));
      outputRange.push(0);

      if (i < showcases.length - 1) {
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
                ? 'https://i.imgur.com/EUqtUMu.png'
                : 'https://i.imgur.com/9bvua6C.png',
            }}
            alt="Kitchensink App Logo"
            className="h-6 w-6"
          />
          <Text className="text-2xl font-bold font-sans">
            Showcases
          </Text>
        </HStack>
        <Text className="max-w-[60%] text-foreground/80 text-center font-serif">
          See components in real-world scenarios
        </Text>
      </View>
    );
  };

  const handleCardPress = useCallback(
    (path: string) => {
      // Prevent multiple rapid navigations
      if (isNavigatingRef.current) return;
      isNavigatingRef.current = true;

      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      router.push(`/(home)/showcases/${path}` as any);
    },
    [router]
  );

  const handleShowcaseSelect = useCallback(
    (showcase: ShowcaseItem, index: number) => {
      // Find original index in showcases array
      const originalIndex = showcases.findIndex(
        (s) => s.path === showcase.path
      );
      if (originalIndex !== -1) {
        // Delay scrolling by 1 second
        setTimeout(() => {
          listRef.current?.scrollToIndex({
            index: originalIndex,
            animated: true,
          });
        }, 1000);
        setCurrentShowcase(showcase);
      }
    },
    []
  );

  return (
    <View className="flex-1">
      <Header />
      <Animated.FlatList
        ref={listRef}
        data={showcases}
        renderItem={({ item, index }) => (
          <ShowcaseCard
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
      <BottomControlBar
        pillLabel={currentShowcase.title}
        components={showcases as ComponentItem[]}
        currentComponent={currentShowcase as ComponentItem}
        onComponentSelect={handleShowcaseSelect as (component: ComponentItem, index: number) => void}
      />
    </View>
  );
}
