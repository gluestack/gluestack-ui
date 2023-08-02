import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    textTransform: 'uppercase',
  },
  { ancestorStyle: ['_text'] }
);
