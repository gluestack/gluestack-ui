import { styled } from '../../styled';
import { ScrollView } from 'react-native';

export default styled(
  ScrollView,
  // @ts-ignore
  {
    alignSelf: 'flex-start',
    // bg: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%) , rgba(255, 255, 255, 0.04);',
    rounded: '$full',
    props: {
      horizontal: true,
    },
  },
  { descendantStyle: ['_tab'], resolveProps: ['horizontal'] }
);
