import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/contexts/app-theme-context';
import type { UsageVariant } from './types';
import { Text } from '@/components/ui/text';
import {
  BottomControlBar,
  type ComponentItem,
} from '@/components/custom/bottom-control-bar';
import {
  COMPONENTS_LIST,
  getComponentByPath,
} from '@/constants/components-list';
import { useRouter, usePathname } from 'expo-router';
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

interface UsageVariantFlatListProps {
  data: UsageVariant[];
  scrollEnabled?: boolean;
  componentPath?: string;
}

type VariantItemProps = {
  item: UsageVariant;
  index: number;
  scrollY: SharedValue<number>;
  itemHeight: number;
  width: number;
  height: number;
};

const VariantItem = memo(
  ({ item, index, scrollY, itemHeight, width, height }: VariantItemProps) => {
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity:
          Platform.OS === 'android'
            ? interpolate(
                scrollY.get() / itemHeight,
                [index - 0.5, index, index + 0.5],
                [0, 1, 0],
                Extrapolation.CLAMP
              )
            : 1,
        transform: [
          {
            scale: interpolate(
              scrollY.get() / itemHeight,
              [index - 0.5, index, index + 0.5],
              [0.9, 1, 0.9],
              Extrapolation.CLAMP
            ),
          },
        ],
      };
    });

    return (
      <Animated.View
        className="items-center justify-center px-6"
        style={[{ width, height }, animatedStyle]}
      >
        {item.content}
      </Animated.View>
    );
  }
);

VariantItem.displayName = 'VariantItem';

export const UsageVariantFlatList = ({
  data,
  scrollEnabled = true,
  componentPath,
}: UsageVariantFlatListProps) => {
  const [currentVariant, setCurrentVariant] = useState<UsageVariant>(data[0]!);
  const router = useRouter();
  const pathname = usePathname();

  const { isDark } = useAppTheme();

  // Extract component path from pathname if not provided
  const derivedComponentPath =
    componentPath || pathname?.split('/').pop() || '';

  const currentComponent = derivedComponentPath
    ? getComponentByPath(derivedComponentPath)
    : undefined;

  // Handle component selection from the menu
  const handleComponentSelect = useCallback(
    (component: ComponentItem) => {
      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      router.replace(`/(home)/components/${component.path}` as any);
    },
    [router]
  );

  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const itemWidth = width;

  const applyBlur = Platform.OS === 'ios';

  const listRef = useRef<FlatList<UsageVariant>>(null);
  const variantNamesScrollRef = useRef<ScrollView>(null);

  const scrollX = useSharedValue(0);

  // Store item positions for accurate scrolling
  const itemPositionsRef = useRef<number[]>([]);

  const scrollVariantNamesToActive = useCallback(
    (activeIndex: number) => {
      if (
        variantNamesScrollRef.current &&
        activeIndex >= 0 &&
        activeIndex < data.length
      ) {
        const itemPositions = itemPositionsRef.current;
        if (itemPositions.length > activeIndex) {
          const itemCenter = itemPositions[activeIndex] || 0;
          const scrollPosition = Math.max(0, itemCenter - width / 2);
          variantNamesScrollRef.current.scrollTo({
            x: scrollPosition,
            animated: true,
          });
        }
      }
    },
    [width, data.length]
  );

  const handleViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: Array<{ item: UsageVariant; index: number | null }>;
    }) => {
      if (viewableItems.length > 0 && viewableItems[0]) {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        const item = viewableItems[0].item;
        const index = viewableItems[0].index ?? 0;
        setCurrentVariant(item);
        scrollVariantNamesToActive(index);
      }
    },
    [scrollVariantNamesToActive]
  );

  // Set initial scroll position after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollVariantNamesToActive(0);
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollVariantNamesToActive]);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.set(event.contentOffset.x);
    },
  });

  const animatedProps = useAnimatedProps(() => {
    if (data.length === 1) {
      return {
        intensity: 0,
      };
    }

    const inputRange: number[] = [];
    const outputRange: number[] = [];

    for (let i = 0; i < data.length; i++) {
      inputRange.push(i);
      outputRange.push(0);

      if (i < data.length - 1) {
        inputRange.push(i + 0.5);
        outputRange.push(30);
      }
    }

    return {
      intensity: interpolate(
        scrollX.get() / itemWidth,
        inputRange,
        outputRange
      ),
    };
  });

  return (
    <>
      <Animated.FlatList
        ref={listRef}
        data={data}
        renderItem={({ item, index }) => (
          <VariantItem
            item={item}
            index={index}
            scrollY={scrollX}
            itemHeight={itemWidth}
            width={width}
            height={height}
          />
        )}
        keyExtractor={(item) => item.value}
        getItemLayout={(_, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
        horizontal
        snapToInterval={itemWidth}
        decelerationRate="fast"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps="handled"
      />
      {applyBlur && (
        <AnimatedBlurView
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          animatedProps={animatedProps}
          tint={
            isDark
              ? 'systemUltraThinMaterialDark'
              : 'systemUltraThinMaterialLight'
          }
        />
      )}
      <View
        className="absolute left-0 right-0 items-center"
        style={{ top: insets.top + 60 }}
        pointerEvents="none"
      >
        {/* Variant names horizontal scrollable list - active item centered, others faded */}
        <ScrollView
          ref={variantNamesScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: width / 2,
          }}
          onLayout={(event) => {
            // Calculate positions of each item after layout
            const { width: scrollWidth } = event.nativeEvent.layout;
            // We'll measure positions dynamically
          }}
        >
          {data.map((item, index) => {
            const rVariantNameStyle = useAnimatedStyle(() => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];

              const opacity = interpolate(
                scrollX.value,
                inputRange,
                [0.3, 1, 0.3],
                Extrapolation.CLAMP
              );

              const scale = interpolate(
                scrollX.value,
                inputRange,
                [0.85, 1, 0.85],
                Extrapolation.CLAMP
              );

              return {
                opacity,
                transform: [{ scale }],
              };
            });

            return (
              <Animated.View
                key={index}
                className="px-3"
                style={rVariantNameStyle}
                onLayout={(event) => {
                  // Measure and store position of each item
                  const { x, width: itemWidth } = event.nativeEvent.layout;
                  itemPositionsRef.current[index] = x + itemWidth / 2;
                }}
              >
                <Text className="text-foreground font-sans font-medium">
                  {item.label}
                </Text>
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
      <BottomControlBar
        bottomOffset={insets.bottom + 34}
        pillLabel={currentComponent?.title}
        showPill={true}
        components={COMPONENTS_LIST}
        currentComponent={currentComponent}
        onComponentSelect={handleComponentSelect}
      />
    </>
  );
};
