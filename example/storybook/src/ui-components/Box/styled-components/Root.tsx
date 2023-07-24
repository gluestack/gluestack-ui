import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    variants: {
      space: {
        xs: {
          gap: `$1`,
        },
        sm: {
          gap: `$10`,
        },
        md: {
          gap: `$20`,
        },
      },
    },
    defaultProps: {
      space: 'xs',
    },
  },
  {
    // descendantStyle: ['_text'],
  }
);
