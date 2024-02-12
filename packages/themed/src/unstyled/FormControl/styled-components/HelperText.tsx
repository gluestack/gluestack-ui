import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(Text, {}, {
  componentName: 'FormControlHelperText',
  ancestorStyle: ['_helperText'],
} as const);
