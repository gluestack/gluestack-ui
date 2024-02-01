import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'TabsContentText',
  ancestorStyle: ['_contentText'],
} as const);
