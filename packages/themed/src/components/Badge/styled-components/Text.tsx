import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    textTransform: 'uppercase',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  } as const
);
