import { Text } from 'react-native';
import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

export default styled(
  Text,
  {
    baseStyle: {
      //@ts-ignore
      style: {
        color: `${config?.tokens?.colors?.primary600}`,
        // @ts-ignore
        fontWeight: 'semibold',
        fontSize: `${config?.tokens?.fontSizes?.xl}`,
        display: 'flex',
        overflow: 'hidden',
        textTransform: 'uppercase',
      },
    },
  },
  { ancestorStyle: ['_text'], DEBUG: 'AVATARFALLBACKTEXT' }
);
