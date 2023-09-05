import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mt: '$1',
    //TODO : remove this ts ignore
    //@ts-ignore
    gap: '0.25rem',
  },
  {}
);
