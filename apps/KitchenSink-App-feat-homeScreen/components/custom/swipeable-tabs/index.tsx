import * as Haptics from 'expo-haptics';
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import PagerView, {
  type PagerViewOnPageScrollEventData,
  type PagerViewOnPageSelectedEventData,
} from 'react-native-pager-view';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export interface Tab {
  key: string;
  title: string;
  component: React.ReactNode;
}

interface SwipeableTabsProps {
  tabs: Tab[];
  initialIndex?: number;
}

interface TabIndicatorProps {
  tabs: Tab[];
  scrollX: SharedValue<number>;
  tabWidths: number[];
  tabPositions: number[];
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  tabs,
  scrollX,
  tabWidths,
  tabPositions,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    if (tabWidths.length === 0 || tabPositions.length === 0) {
      return { width: 0, transform: [{ translateX: 0 }] };
    }

    const inputRange = tabs.map((_, i) => i * SCREEN_WIDTH);
    const widthOutputRange = tabWidths;
    const translateOutputRange = tabPositions;

    const width = interpolate(
      scrollX.value,
      inputRange,
      widthOutputRange,
      Extrapolation.CLAMP
    );

    const translateX = interpolate(
      scrollX.value,
      inputRange,
      translateOutputRange,
      Extrapolation.CLAMP
    );

    return {
      width,
      transform: [{ translateX }],
    };
  });

  return (
    <Animated.View
      className="absolute bottom-0 h-[3px] rounded-full bg-typography-900"
      style={animatedStyle}
    />
  );
};

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
  const pagerRef = useRef<PagerView>(null);
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const [tabPositions, setTabPositions] = useState<number[]>([]);

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

  const onPageScroll = useCallback(
    (event: { nativeEvent: PagerViewOnPageScrollEventData }) => {
      const { position, offset } = event.nativeEvent;
      // Convert page position + offset to scrollX value
      scrollX.value = (position + offset) * SCREEN_WIDTH;
    },
    [scrollX]
  );

  const onPageSelected = useCallback(
    (_event: { nativeEvent: PagerViewOnPageSelectedEventData }) => {
      triggerHaptic();
    },
    [triggerHaptic]
  );

  const scrollToTab = useCallback(
    (index: number) => {
      pagerRef.current?.setPage(index);
      triggerHaptic();
    },
    [triggerHaptic]
  );

  return (
    <View className="flex-1 bg-background">
      {/* Tab Header */}
      <View style={{ paddingTop: insets.top }} className='bg-transparent'>
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
            <TabIndicator
              tabs={tabs}
              scrollX={scrollX}
              tabWidths={tabWidths}
              tabPositions={tabPositions}
            />
          </View>
        </View>
      </View>

      {/* Content */}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={initialIndex}
        onPageScroll={onPageScroll}
        onPageSelected={onPageSelected}
        overdrag={false}
        scrollEnabled={false}
        
      >
        {tabs.map((tab) => (
          <View key={tab.key} className="flex-1 pb-safe">
            {tab.component}
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default SwipeableTabs;
