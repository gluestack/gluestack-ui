import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: { style: { color: '$text800' } },
  },
  { ancestorStyle: ['_text'] },
  config
);
