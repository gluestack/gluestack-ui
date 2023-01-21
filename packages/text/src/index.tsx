import type React from 'react';
import { Text as TextMain } from './Text';

export const createText = <T,>({
  Root: StyledText,
}: {
  Root: React.ComponentType<T>;
}) => {
  const Text = TextMain(StyledText);
  Text.displayName = 'Text';
  return Text;
};
