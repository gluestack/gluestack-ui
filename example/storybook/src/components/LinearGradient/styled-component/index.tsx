import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

const LinearGradient = styled(
  ExpoLinearGradient,
  {
    baseStyle: {
      //@ts-ignore
      style: {
        outlineWidth: '1000px',
      },
    },
  },
  {}
);

export { LinearGradient as Root };
