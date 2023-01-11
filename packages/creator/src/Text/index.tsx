import type React from 'react';
import { Text as TextMain } from './Text';

export const createText = <T,>({
  StyledText,
}: {
  StyledText: React.ComponentType<T>;
}) => {
  const Text = TextMain(StyledText);
  Text.displayName = 'Text';
  return Text;
};
