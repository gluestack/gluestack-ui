import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  { ancestorStyle: ['_title'] }
);
