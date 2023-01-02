import { styled } from '@gluestack/ui-styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        //@ts-ignore
        fontSize: '$xs',
        color: '$error600',
        ml: '$1',
      },
      colorMode: {
        style: {
          color: '$error500',
        },
      },
    },
  },
  {}
);
