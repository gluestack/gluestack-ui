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
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
    },
  },
  {},
  config
);
