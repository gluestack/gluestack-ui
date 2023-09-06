import { Image } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Image,
  {
    w: '$full',
    h: '$full',
    borderRadius: '$full',
    position: 'absolute',
  },
  {
    componentName: 'AvatarImage',
  } as const
);
