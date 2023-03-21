import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    variants: {
      size: {
        xs: {
          h: '$3',
          w: '$3',
        },
        sm: {
          h: '$4',
          w: '$4',
        },
        md: {
          h: '$5',
          w: '$5',
        },
        lg: {
          h: '$6',
          w: '$6',
        },
        xl: {
          h: '$10',
          w: '$10',
        },
      },
    },
  },
  {
    resolveProps: ['color'],
  }
);
