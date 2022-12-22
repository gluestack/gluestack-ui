import { config } from '../ui.config';
import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    // baseStyle: { style: { px: '$1' } },
  },
  { ancestorStyle: ['_icon'] },
  config
);
