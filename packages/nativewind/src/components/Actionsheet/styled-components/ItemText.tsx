import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'ActionsheetItemText',
  ancestorStyle: ['_text'],
} as const);
