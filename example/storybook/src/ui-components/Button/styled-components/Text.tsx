import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight0',
    _web: {
      userSelect: 'none',
    },
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
