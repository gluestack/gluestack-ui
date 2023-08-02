import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    fontSize: '$xs',
    fontFamily: '$body',
    color: '$textLight500',
    _dark: {
      color: '$textDark400',
    },
  },
  { ancestorStyle: ['_helperText'] }
);
