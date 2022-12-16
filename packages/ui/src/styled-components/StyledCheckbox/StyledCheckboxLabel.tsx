import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: { color: '$blue.900', p: 2 },
      platform: {
        web: {
          style: {
            //@ts-ignore
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          },
        },
      },
    },
  },
  {}
);
