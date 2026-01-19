import * as Haptics from 'expo-haptics';
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export interface Tab {
  key: string;
  title: string;
  component: React.ReactNode;
}

interface SwipeableTabsProps {
  tabs: Tab[];
  initialIndex?: number;
}

interface TabButtonProps {
  tab: Tab;
  index: number;
  scrollX: SharedValue<number>;
  onPress: () => void;
  onLayout: (event: LayoutChangeEvent, index: number) => void;
}

interface FadeOverlayProps {
  scrollX: SharedValue<number>;
  tabCount: number;
  side: 'left' | 'right';
}

const FadeOverlay: React.FC<FadeOverlayProps> = ({
  scrollX,
  tabCount,
  side,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const lastTabScrollX = (tabCount - 1) * SCREEN_WIDTH;

    if (side === 'right') {
      // Fade out as we approach the last tab
      const opacity = interpolate(
        scrollX.value,
        [lastTabScrollX - SCREEN_WIDTH, lastTabScrollX],
        [0.65, 0],
        Extrapolation.CLAMP
      );
      return { opacity };
    } else {
      // Fade out as we approach the first tab
      const opacity = interpolate(
        scrollX.value,
        [0, SCREEN_WIDTH],
        [0, 0.65],
        Extrapolation.CLAMP
      );
      return { opacity };
    }
  });

  return (
    <Animated.View
      className="bg-background"
      style={[
        {
          position: 'absolute',
          [side]: 0,
          top: 0,
          bottom: 0,
          width: side === 'left' ? 46 : 40,
          zIndex: 10,
        },
        animatedStyle,
      ]}
      pointerEvents="none"
    />
  );
};

const TabButton: React.FC<TabButtonProps> = ({
  tab,
  index,
  scrollX,
  onPress,
  onLayout,
}) => {
  const animatedWrapperStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.95, 1.05, 0.95],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.1, 1, 0.1],
      Extrapolation.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={animatedWrapperStyle}
      onLayout={(e) => onLayout(e, index)}
    >
      <Pressable onPress={onPress} className="px-4 py-3">
        <Text className="text-base font-medium text-foreground font-body">
          {tab.title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export const SwipeableTabs: React.FC<SwipeableTabsProps> = ({
  tabs,
  initialIndex = 1,
}) => {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const [tabPositions, setTabPositions] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(initialIndex);

  const scrollX = useSharedValue(initialIndex * SCREEN_WIDTH);

  const handleTabLayout = useCallback(
    (event: LayoutChangeEvent, index: number) => {
      const { width, x } = event.nativeEvent.layout;
      setTabWidths((prev) => {
        const newWidths = [...prev];
        newWidths[index] = width;
        return newWidths;
      });
      setTabPositions((prev) => {
        const newPositions = [...prev];
        newPositions[index] = x;
        return newPositions;
      });
    },
    []
  );

  const triggerHaptic = useCallback(() => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  }, []);

  // Web ScrollView handler
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleScrollEnd = useCallback(
    (event: any) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const pageIndex = Math.round(offsetX / SCREEN_WIDTH);
      if (pageIndex !== currentPage) {
        setCurrentPage(pageIndex);
        triggerHaptic();
      }
    },
    [currentPage, triggerHaptic]
  );

  const scrollToTab = useCallback(
    (index: number) => {
      scrollViewRef.current?.scrollTo({
        x: index * SCREEN_WIDTH,
        animated: true,
      });
      triggerHaptic();
    },
    [triggerHaptic]
  );

  // Initialize scroll position for web
  React.useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: initialIndex * SCREEN_WIDTH,
          animated: false,
        });
      }, 0);
    }
  }, [initialIndex]);

  return (
    <View className="flex-1 bg-background">
      {/* Tab Header */}
      <View style={{ paddingTop: insets.top }} className="bg-transparent">
        <View className="flex-row items-center justify-center px-2">
          <View className="flex-row relative">
            <FadeOverlay
              scrollX={scrollX}
              tabCount={tabs.length}
              side="right"
            />
            <FadeOverlay scrollX={scrollX} tabCount={tabs.length} side="left" />
            {tabs.map((tab, index) => (
              <TabButton
                key={tab.key}
                tab={tab}
                index={index}
                scrollX={scrollX}
                onPress={() => scrollToTab(index)}
                onLayout={handleTabLayout}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Content */}
      <AnimatedScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        contentContainerStyle={{ width: SCREEN_WIDTH * tabs.length }}
      >
        {tabs.map((tab) => (
          <View
            key={tab.key}
            className="flex-1 pb-safe"
            style={{ width: SCREEN_WIDTH }}
          >
            {tab.component}
          </View>
        ))}
      </AnimatedScrollView>
    </View>
  );
};

export default SwipeableTabs;
