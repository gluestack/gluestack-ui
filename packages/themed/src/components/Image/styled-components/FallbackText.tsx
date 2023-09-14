import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontFamily: '$body',
    color: '$blue900',
    bg: '$amber500',
    p: 10,
  },
  {
    componentName: 'ImageFallbackText',
  } as const
);
