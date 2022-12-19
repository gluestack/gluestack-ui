import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
      },
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {}
);
