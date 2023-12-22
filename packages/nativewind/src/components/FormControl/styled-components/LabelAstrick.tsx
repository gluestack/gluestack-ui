// import { Text } from '@gluestack-ui/ui';
import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';
export default styled(Text, {}, {
  componentName: 'FormControlErrorText',
  ancestorStyle: ['_labelAstrick'],
} as const);
