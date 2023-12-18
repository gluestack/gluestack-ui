import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$text.50',
    fontFamily: '$body',
    userSelect: 'none',
    //@ts-ignore
    lineHeight: '1.5em',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
