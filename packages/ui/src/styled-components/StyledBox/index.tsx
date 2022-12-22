import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      //@ts-ignore
      outlineWidth: '1000px',
    },
  },
  {
    descendantStyle: ['_text'],
  },
  config
);
