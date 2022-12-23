import { config } from '../ui.config';
// import { Popper } from '@gluestack/ui-styled';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 200,
        py: '$2',
        rounded: '$sm',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
    },
  },
  {},
  config
);
