import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(Text, {}, {
  componentName: 'FormControlLabelText',
  ancestorStyle: ['_labelText'],
} as const);
