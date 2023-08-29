import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontFamily: '$body',
    //@ts-ignore
    userSelect: 'none',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
