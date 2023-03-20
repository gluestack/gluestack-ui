import { Text } from 'react-native';
import { styled } from '../../core/styled';

export default styled(
  Text,
  {
    color: '$text800',
    fontFamily: '$body',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
