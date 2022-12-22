import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    baseStyle: {},
  },
  { ancestorStyle: ['_spinner'] },
  config
);
