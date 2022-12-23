import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    // baseStyle: {
    //   style: { color: '$primary600' },
    // },
    // sizes: {
    //   sm: {
    //     style: {
    //       w: 20,
    //       h: 20,
    //     },
    //   },
    //   lg: {
    //     style: {
    //       w: 36,
    //       h: 36,
    //     },
    //   },
    // },
    // defaultProps: {
    //   size: 'sm',
    // },
  },
  {
    resolveProps: ['color'],
  },
  config
);
