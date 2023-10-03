import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    props: {
      size: 'xs',
    },
    color: '$textLight500',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    componentName: 'FormControlHelperText',
    ancestorStyle: ['_helperText'],
  } as const
);
