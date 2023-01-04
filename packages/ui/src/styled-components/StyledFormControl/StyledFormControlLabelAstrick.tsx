// import { Text } from '@gluestack/ui';
import { styled } from '@gluestack/ui-styled';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    baseStyle: { style: { color: '$error600' } },
    colorMode: {
      dark: {
        style: { color: '$error500' },
      },
    },
  },
  {}
);
