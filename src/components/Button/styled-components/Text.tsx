import { AccessibleText as Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontFamily: '$body',
    userSelect: 'none',
    //@ts-ignore
    lineHeight: '1.5em',
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDBUTTONTEXT' }
);
