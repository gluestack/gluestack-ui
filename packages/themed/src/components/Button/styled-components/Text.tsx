import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight0',
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  {
    componentName: 'ButtonText',
    ancestorStyle: ['_text'],
  }
);
