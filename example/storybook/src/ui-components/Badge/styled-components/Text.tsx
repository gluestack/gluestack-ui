import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'] }
);
