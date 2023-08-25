import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$sm',
  },
  {
    componentName: 'ToastDescription',
    ancestorStyle: ['_text'],
  }
);
