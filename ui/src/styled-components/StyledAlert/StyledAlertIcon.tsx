import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        display: 'flex',
      },
    },
  },
  { ancestorStyle: ['_icon'] }
);
