import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  GlassContainer as ExpoGlassContainer,
  GlassView as ExpoGlassView,
  type GlassContainerProps,
  type GlassViewProps,
} from 'expo-glass-effect';
import { cssInterop } from 'nativewind';
import React from 'react';

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

export const GlassView = React.forwardRef<
  React.ComponentRef<typeof ExpoGlassView>,
  IGlassViewProps
>(function GlassView({ className, ...props }, ref) {
  return (
    <ExpoGlassView
      ref={ref}
      {...props}
      // @ts-ignore - className support via cssInterop
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
    <ExpoGlassContainer
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
  GlassViewProps,
} from 'expo-glass-effect';

cssInterop(ExpoGlassView, {
  className: 'style',
});

cssInterop(ExpoGlassContainer, {
  className: 'style',
});