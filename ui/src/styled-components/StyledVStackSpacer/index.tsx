import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    sizes: {
      sm: {
        style: {
          height: '$10',
        },
      },
      md: {
        style: {
          h: '$20',
        },
      },
      lg: {
        style: {
          h: '$30',
        },
      },
    },
  },
  {},
  config
);
