import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      space: {
        xs: {
          w: '$1',
        },
        sm: {
          w: '$1.5',
        },
        md: {
          w: '$2',
        },
        lg: {
          w: '$3',
        },
        xl: {
          w: '$4',
        },
      },
    },
  },
  { ancestorStyle: ['_groupHSpacer'] }
);
