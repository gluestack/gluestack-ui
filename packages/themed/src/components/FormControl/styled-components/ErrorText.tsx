import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    props: {
      size: 'xs',
    },
    color: '$error700',
    ml: '$1',
    _dark: {
      color: '$error400',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_errorText'],
  } as const
);
