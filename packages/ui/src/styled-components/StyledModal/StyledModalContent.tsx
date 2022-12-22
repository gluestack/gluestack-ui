import { config } from '../ui.config';
import { View, Dimensions } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        // shadow: 1
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        maxHeight: `${Dimensions.get('window').height - 150}px`,
        rounded: '$lg',
        overflow: 'hidden',
        bg: '$white',
        maxWidth: 450,
      },
    },
  },
  {},
  config
);
