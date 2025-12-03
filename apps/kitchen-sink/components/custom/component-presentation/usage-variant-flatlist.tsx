import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { memo, useCallback, useContext, useRef, useState } from "react";
import {
  FlatList,
  Platform,
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
  type SharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorModeContext } from "@/app/_layout";
import { PaginationIndicator } from "./pagination-indicator";
import type { UsageVariant } from "./types";
import { Text } from "@/components/ui/text";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

interface UsageVariantFlatListProps {
  data: UsageVariant[];
  scrollEnabled?: boolean;
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
        opacity: Platform.OS === "android"
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
      <Animated.View className="items-center justify-center " style={[{ width, height: 400 }, animatedStyle]}>
        {item.content}
      </Animated.View>
    );
  }
);

VariantItem.displayName = "VariantItem";

export const UsageVariantFlatList = ({
  data,
  scrollEnabled = true,
}: UsageVariantFlatListProps) => {
  const [currentVariant, setCurrentVariant] = useState<UsageVariant>(data[0]!);

  const { colorMode }: any = useContext(ColorModeContext);
  const isDark = colorMode === 'dark';

  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const itemWidth = width;

  const applyBlur = Platform.OS === "ios";

  const listRef = useRef<FlatList<UsageVariant>>(null);

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<{ item: UsageVariant }> }) => {
      if (viewableItems.length > 0 && viewableItems[0]) {
        if (Platform.OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setCurrentVariant(viewableItems[0].item);
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
              ? "systemUltraThinMaterialDark"
              : "systemUltraThinMaterialLight"
          }
        />
      )}
      <View
        className="absolute left-0 right-0 items-center"
        style={{ bottom: insets.bottom + 34 }}
        pointerEvents="none"
      >
        <View className="gap-3 w-full items-center">
          {/* Fixed text label container */}
          <View className="h-6 flex-row w-full justify-center">
            {data.map((item, index) => {
              const rLabelStyle = useAnimatedStyle(() => {
                return {
                  opacity: interpolate(
                    scrollX.value / width,
                    [index - 0.5, index, index + 0.5],
                    [0, 1, 0],
                    Extrapolation.CLAMP
                  ),
                };
              });

              return (
                <Animated.View
                  key={index}
                  className="absolute"
                  style={rLabelStyle}
                >
                  <Text className="text-typography-900 text-base font-medium">
                    {item.label}
                  </Text>
                </Animated.View>
              );
            })}
          </View>

          {/* Dots container */}
          <View className="flex-row gap-1">
            {data.map((item, index) => (
              <PaginationIndicator
                key={index}
                index={index}
                scrollY={scrollX}
                itemSize={width}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};
