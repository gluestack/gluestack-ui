import * as Haptics from 'expo-haptics';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  LayoutChangeEvent,
  Platform,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
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

const FadeOverlay: React.FC<FadeOverlayProps & { screenWidth: number }> = ({
  scrollX,
  tabCount,
  side,
  screenWidth,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const lastTabScrollX = (tabCount - 1) * screenWidth;

    if (side === 'right') {
      // Fade out as we approach the last tab
      const opacity = interpolate(
        scrollX.value,
        [lastTabScrollX - screenWidth, lastTabScrollX],
        [0.65, 0],
        Extrapolation.CLAMP
      );
      return { opacity };
    } else {
      // Fade out as we approach the first tab
      const opacity = interpolate(
        scrollX.value,
        [0, screenWidth],
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

const TabButton: React.FC<TabButtonProps & { screenWidth: number }> = ({
  tab,
  index,
  scrollX,
  onPress,
  onLayout,
  screenWidth,
}) => {
  const animatedWrapperStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * screenWidth,
      index * screenWidth,
      (index + 1) * screenWidth,
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
  const { width: screenWidth } = useWindowDimensions();

  const scrollX = useSharedValue(initialIndex * screenWidth);

  // Update scrollX and scroll position when screenWidth changes to maintain correct position
  useEffect(() => {
    if (scrollViewRef.current && screenWidth > 0) {
      const newScrollX = currentPage * screenWidth;
      scrollX.value = newScrollX;
      scrollViewRef.current.scrollTo({
        x: newScrollX,
        animated: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth, currentPage]);

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
      const pageIndex = Math.round(offsetX / screenWidth);
      if (pageIndex !== currentPage) {
        setCurrentPage(pageIndex);
        triggerHaptic();
      }
    },
    [currentPage, triggerHaptic, screenWidth]
  );

  const scrollToTab = useCallback(
    (index: number) => {
      scrollViewRef.current?.scrollTo({
        x: index * screenWidth,
        animated: true,
      });
      triggerHaptic();
    },
    [triggerHaptic, screenWidth]
  );

  // Initialize scroll position for web
  React.useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: initialIndex * screenWidth,
          animated: false,
        });
      }, 0);
    }
  }, [initialIndex, screenWidth]);

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
              screenWidth={screenWidth}
            />
            <FadeOverlay
              scrollX={scrollX}
              tabCount={tabs.length}
              side="left"
              screenWidth={screenWidth}
            />
            {tabs.map((tab, index) => (
              <TabButton
                key={tab.key}
                tab={tab}
                index={index}
                scrollX={scrollX}
                onPress={() => scrollToTab(index)}
                onLayout={handleTabLayout}
                screenWidth={screenWidth}
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
        contentContainerStyle={{ width: screenWidth * tabs.length }}
      >
        {tabs.map((tab) => (
          <View
            key={tab.key}
            className="flex-1 pb-safe"
            style={{ width: screenWidth }}
          >
            {tab.component}
          </View>
        ))}
      </AnimatedScrollView>
    </View>
  );
};

export default SwipeableTabs;
