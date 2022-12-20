import { styled } from '@gluestack/ui-styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    baseStyle: {
      style: {
        px: '$1',
      },
    },
  },
  { ancestorStyle: ['_spinner'] }
);
