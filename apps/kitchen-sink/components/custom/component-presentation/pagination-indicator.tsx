import { View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedView = Animated.createAnimatedComponent(View);

export type PaginationIndicatorProps = {
  index: number;
  scrollY: SharedValue<number>;
  itemSize: number;
};

export function PaginationIndicator({
  index,
  scrollY,
  itemSize,
}: PaginationIndicatorProps) {
  const rBarStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.get() / itemSize,
      [index - 2, index - 1, index, index + 1, index + 2],
      [0.7, 1, 1.3, 1, 0.7],
      Extrapolation.CLAMP
    );

    return {
      opacity: interpolate(
        scrollY.get() / itemSize,
        [index - 2, index - 1, index, index + 1, index + 2],
        [0.3, 0.6, 1, 0.6, 0.3],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          scale: scale,
        },
      ],
      shadowOpacity: interpolate(
        scrollY.get() / itemSize,
        [index - 2, index - 1, index, index + 1, index + 2],
        [0.1, 0.2, 0.4, 0.2, 0.1],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <AnimatedView
      className="w-2 h-2 bg-background-500 rounded-full"
      style={[
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3,
          elevation: 4,
        },
        rBarStyle,
      ]}
    />
  );
}
