import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
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
import { Image } from '@/components/ui/image';
import { HStack } from '@/components/ui/hstack';
import {
  BottomControlBar,
  type ComponentItem,
} from '@/components/custom/bottom-control-bar';
import { SHOWCASES_LIST, type ShowcaseItem } from '@/constants/showcases-list';
import LoginShowcase from '../showcases/login';
import DashboardShowcase from '../showcases/dashboard';
import ProfileShowcase from '../showcases/profile';
import EcommerceShowcase from '../showcases/ecommerce';
import SocialShowcase from '../showcases/social';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

// Map showcase paths to their components
const SHOWCASE_COMPONENTS: Record<string, React.ComponentType> = {
  login: LoginShowcase,
  dashboard: DashboardShowcase,
  profile: ProfileShowcase,
  ecommerce: EcommerceShowcase,
  social: SocialShowcase,
};

const showcases = SHOWCASES_LIST;

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

    const ShowcaseComponent = SHOWCASE_COMPONENTS[item.path];

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
            <View className="flex-1 overflow-hidden rounded-3xl bg-background border border-border">
              {ShowcaseComponent ? (
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
              ) : (
                <View className="flex-1 justify-center p-8">
                  <Text className="text-typography-900 font-sans text-xl font-bold">
                    {item.title}
                  </Text>
                  <Text className="text-typography-500 text-sm mt-2">
                    {item.description || 'Showcase'}
                  </Text>
                </View>
              )}
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
  const { width, height } = useWindowDimensions();

  const CARD_WIDTH = width * 0.6;
  const CARD_HEIGHT = height * 0.6;
  const SPACING = 100;
  const SIDE_OFFSET = (width - CARD_WIDTH) / 2 - SPACING / 2;

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
          <Text className="text-2xl font-bold font-sans">Showcases</Text>
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
