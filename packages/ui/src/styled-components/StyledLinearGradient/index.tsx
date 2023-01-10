import { styled } from 'dank-style';
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
