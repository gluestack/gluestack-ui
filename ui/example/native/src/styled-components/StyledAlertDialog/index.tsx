import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      platform: {
        web: {
          style: {
            // @ts-ignore
            pointerEvents: 'box-none',
          },
        },
      },
    },
    //@ts-ignore
    defaultProps: {},
  },
  {}
);
