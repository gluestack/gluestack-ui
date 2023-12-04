import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

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
