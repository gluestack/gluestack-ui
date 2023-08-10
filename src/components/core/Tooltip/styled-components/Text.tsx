import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$red400',
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
