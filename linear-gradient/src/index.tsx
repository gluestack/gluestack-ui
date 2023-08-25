import type React from 'react';
import { LinearGradient as LinearGradientMain } from './LinearGradient';

export function createLinearGradient<LinearGradientProps>({
  Root,
}: {
  Root: React.ComponentType<LinearGradientProps>;
}) {
  const LinearGradient = LinearGradientMain(Root) as any;

  LinearGradient.displayName = 'LinearGradient';

  return LinearGradient as React.ComponentType<LinearGradientProps>;
}
