import { type FC, type PropsWithChildren } from "react";
import { Platform, ScrollView, type ScrollViewProps } from "react-native";
import Animated, { type AnimatedProps } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

interface Props extends AnimatedProps<ScrollViewProps> {
  className?: string;
  contentContainerClassName?: string;
}

export const ScreenScrollView: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  contentContainerClassName,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  // Calculate header height based on platform
  // iOS with transparent header: 44 (navbar) + safe area top
  // Android: 56 (action bar) + safe area top
  const headerHeight = Platform.select({
    ios: 44 + insets.top,
    android: 56 + insets.top,
    default: insets.top,
  });

  return (
    <AnimatedScrollView
      className={className}
      contentContainerClassName={contentContainerClassName}
      contentContainerStyle={{
        paddingTop: headerHeight,
        paddingBottom: insets.bottom + 32,
      }}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </AnimatedScrollView>
  );
};
