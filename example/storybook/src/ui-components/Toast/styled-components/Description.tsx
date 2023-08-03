import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
    props: {
      size: 'sm',
    },
  },
  { ancestorStyle: ['_text'] }
);
