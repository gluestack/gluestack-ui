import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  GlassContainer as ExpoGlassContainer,
  GlassView as ExpoGlassView,
  type GlassContainerProps,
  type GlassViewProps
} from 'expo-glass-effect';
import { styled } from 'nativewind';
import React from 'react';
import { Platform, View } from 'react-native';

const glassViewStyle = tva({
  base: 'overflow-hidden',
});

const glassContainerStyle = tva({
  base: 'overflow-hidden',
});

type IGlassViewProps = GlassViewProps & {
  className?: string;
};

type IGlassContainerProps = GlassContainerProps & {
  className?: string;
};

const StyledExpoGlassView = styled(ExpoGlassView, {
  className: 'style',
});

const StyledExpoGlassContainer = styled(ExpoGlassContainer, {
  className: 'style',
});
export const GlassView = React.forwardRef<
  React.ComponentRef<typeof ExpoGlassView>,
  IGlassViewProps
>(function GlassView({ className, ...props }, ref) {
  return (
    Platform.OS === 'web' ? <View ref={ref} {...props} className={glassViewStyle({ className: `overflow-hidden bg-background/40 backdrop-blur-md ${className ?? ""}`, })} /> : <StyledExpoGlassView
      ref={ref}
      {...props}
      className={glassViewStyle({ className })}
    />
  );
});

GlassView.displayName = 'GlassView';

export const GlassContainer = React.forwardRef<
  React.ComponentRef<typeof ExpoGlassContainer>,
  IGlassContainerProps
>(function GlassContainer({ className, ...props }, ref) {
  return (
    Platform.OS === 'web' ? <View ref={ref} {...props} className={glassContainerStyle({ className: `overflow-hidden bg-background/0 backdrop-blur-md ${className ?? ""}`, })} /> : <StyledExpoGlassContainer
      ref={ref}
      {...props}
      // @ts-ignore - className support via cssInterop
      className={glassContainerStyle({ className })}
    />
  );
});

GlassContainer.displayName = 'GlassContainer';

export { isGlassEffectAPIAvailable, isLiquidGlassAvailable } from 'expo-glass-effect';
export type {
  GlassColorScheme,
  GlassContainerProps,
  GlassStyle,
  GlassViewProps
} from 'expo-glass-effect';
