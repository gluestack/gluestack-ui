import {
  BottomControlBar,
  type ComponentItem,
} from '@/components/custom/bottom-control-bar';
import { useAppTheme } from '@/contexts/app-theme-context';
import { useAccessibilityInfo } from '@/helpers/use-accessability-info';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { memo, useCallback, useRef, useState } from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from 'react-native-reanimated';
import Showcase1 from '../showcases/showcase-1';
import Showcase2 from '../showcases/showcase-2';
import Showcase3 from '../showcases/showcase-3';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
cssInterop(Animated.FlatList, { className: 'style' });

// Define showcases with their components in one place
type ShowcaseItem = ComponentItem & {
  component: React.ComponentType;
};

const showcases: ShowcaseItem[] = [
  {
    title: 'Showcase 1',
    path: 'showcase-1',
    component: Showcase1,
  },
  {
    title: 'Showcase 2',
    path: 'showcase-2',
    component: Showcase2,
  },
  {
    title: 'Showcase 3',
    path: 'showcase-3',
    component: Showcase3,
  },
];

type ShowcaseCardProps = {
  item: ShowcaseItem;
  index: number;
  scrollX: SharedValue<number>;
  spacing: number;
  onPress: () => void;
};

const ShowcaseCard = memo(
  ({ item, index, scrollX, spacing, onPress }: ShowcaseCardProps) => {
    const { reduceTransparencyEnabled } = useAccessibilityInfo();
    const { width, height } = useWindowDimensions();
    const applyOpacity = reduceTransparencyEnabled;

    const cardWidth = width * 0.6;
    const cardHeight = height * 0.6;
    const SCALE = 0.6;

    const animatedStyle = useAnimatedStyle(() => {
      const inputRange = [
        (index - 1) * (cardWidth + spacing),
        index * (cardWidth + spacing),
        (index + 1) * (cardWidth + spacing),
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
      };
    });

    const ShowcaseComponent = item.component;

    return (
      <View
        style={{
          width: cardWidth + spacing,
          height: cardHeight,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={[
            {
              width: cardWidth,
              height: cardHeight,
            },
            animatedStyle,
          ]}
        >
          <Pressable
            onPress={onPress}
            style={{ width: '100%', height: '100%' }}
          >
            <View
              className="flex-1 overflow-hidden rounded-3xl bg-background border border-border"
              pointerEvents="none"
            >
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Animated.View
                  style={{
                    width: width,
                    height: height,
                    transform: [{ scale: SCALE }],
                  }}
                >
                  <ShowcaseComponent />
                </Animated.View>
              </View>
            </View>
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
  const { width } = useWindowDimensions();

  const CARD_WIDTH = width * 0.6;
  const SPACING = 100;
  const SIDE_OFFSET = (width - CARD_WIDTH) / 2 - SPACING / 2;

  const { reduceTransparencyEnabled } = useAccessibilityInfo();
  const applyBlur = !reduceTransparencyEnabled && Platform.OS === 'ios';

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
      inputRange.push(i * (CARD_WIDTH + SPACING));
      outputRange.push(0);

      if (i < showcases.length - 1) {
        inputRange.push((i + 0.5) * (CARD_WIDTH + SPACING));
        outputRange.push(30);
      }
    }

    return {
      intensity: interpolate(scrollX.get(), inputRange, outputRange),
    };
  });

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
      <Animated.FlatList
        ref={listRef}
        data={showcases}
        renderItem={({ item, index }) => (
          <ShowcaseCard
            item={item}
            index={index}
            scrollX={scrollX}
            spacing={SPACING}
            onPress={() => handleCardPress(item.path)}
          />
        )}
        className="mt-10"
        keyExtractor={(item) => item.path}
        getItemLayout={(_, index) => ({
          length: CARD_WIDTH + SPACING,
          offset: (CARD_WIDTH + SPACING) * index,
          index,
        })}
        horizontal
        snapToInterval={CARD_WIDTH + SPACING}
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
        onComponentSelect={
          handleShowcaseSelect as (
            component: ComponentItem,
            index: number
          ) => void
        }
      />
    </View>
  );
}
