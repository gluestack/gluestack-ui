import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    props: {
      size: 'md',
    },
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
