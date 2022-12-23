import { config } from '../ui.config';
import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        display: 'flex',
        mr: 8,
      },
    },
  },
  { ancestorStyle: ['_icon'] },
  config
);
