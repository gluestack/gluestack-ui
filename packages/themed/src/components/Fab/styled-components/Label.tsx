import { styled } from '../../styled';
import { Text } from '../../Text';

export default styled(
  Text,
  {
    color: '$textLight50',
  },
  {
    componentName: 'FabLabel',
    ancestorStyle: ['_text'],
  } as const
);
