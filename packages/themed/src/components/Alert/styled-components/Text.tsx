import { Text } from '../../Text';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    flex: 1,
  },
  {
    componentName: 'AlertText',
    ancestorStyle: ['_text'],
  } as const
);
