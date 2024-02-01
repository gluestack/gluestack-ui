import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'TabsTitleText',
  ancestorStyle: ['_titleText'],
} as const);
