import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight0',
    fontWeight: '$semibold',
    props: {
      size: 'xl',
    },
    overflow: 'hidden',
    textTransform: 'uppercase',
    _web: {
      cursor: 'default',
    },
  },
  { ancestorStyle: ['_text'] }
);
