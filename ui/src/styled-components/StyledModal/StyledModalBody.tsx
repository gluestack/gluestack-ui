import { config } from '../ui.config';
import { ScrollView } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  ScrollView,
  {
    baseStyle: {
      style: {
        padding: '$4',
      },
    },
  },
  {},
  config
);
