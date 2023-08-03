import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    props: {
      size: 'md',
    },
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
