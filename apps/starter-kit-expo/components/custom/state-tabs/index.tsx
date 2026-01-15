import * as Haptics from 'expo-haptics';
import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  LayoutChangeEvent,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface Tab {
  key: string;
  title: string;
  component: React.ReactNode;
}

interface StateTabsProps {
  tabs: Tab[];
  initialIndex?: number;
}

interface TabIndicatorProps {
  tabs: Tab[];
  activeIndex: number;
  tabWidths: number[];
  tabPositions: number[];
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  tabs,
  activeIndex,
  tabWidths,
  tabPositions,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    if (tabWidths.length === 0 || tabPositions.length === 0) {
      return { width: 0, transform: [{ translateX: 0 }] };
    }

    const width = withTiming(tabWidths[activeIndex] || 0, { duration: 250 });
    const translateX = withTiming(tabPositions[activeIndex] || 0, {
      duration: 250,
    });

    return {
      width,
      transform: [{ translateX }],
    };
  }, [activeIndex, tabWidths, tabPositions]);

  return (
    <Animated.View
      className="absolute bottom-0 h-[3px] rounded-full bg-muted-foreground"
      style={animatedStyle}
    />
  );
};

interface TabButtonProps {
  tab: Tab;
  index: number;
  activeIndex: number;
  onPress: () => void;
  onLayout: (event: LayoutChangeEvent, index: number) => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  tab,
  index,
  activeIndex,
  onPress,
  onLayout,
}) => {
  const isActive = index === activeIndex;

  const animatedWrapperStyle = useAnimatedStyle(() => {
    const scale = withTiming(isActive ? 1.05 : 0.95, { duration: 200 });
    const opacity = withTiming(isActive ? 1 : 0.4, { duration: 200 });

    return {
      opacity,
      transform: [{ scale }],
    };
  }, [isActive]);

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

export const StateTabs: React.FC<StateTabsProps> = ({
  tabs,
  initialIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [tabWidths, setTabWidths] = useState<number[]>([]);
  const [tabPositions, setTabPositions] = useState<number[]>([]);

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

  const scrollToTab = useCallback(
    (index: number) => {
      setActiveIndex(index);
      triggerHaptic();
    },
    [triggerHaptic]
  );

  return (
    <View className="flex-1">
      {/* Tab Header */}
      <View className="flex-row items-center justify-center px-2">
        <View className="flex-row relative">
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.key}
              tab={tab}
              index={index}
              activeIndex={activeIndex}
              onPress={() => scrollToTab(index)}
              onLayout={handleTabLayout}
            />
          ))}
          <TabIndicator
            tabs={tabs}
            activeIndex={activeIndex}
            tabWidths={tabWidths}
            tabPositions={tabPositions}
          />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1">{tabs[activeIndex]?.component}</View>
    </View>
  );
};

export default StateTabs;
