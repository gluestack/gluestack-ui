import { styled } from '@gluestack/ui-styled';
import { LinearGradient } from 'expo-linear-gradient';

export default styled(
  LinearGradient,
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
