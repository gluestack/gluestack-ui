import { styled } from '@gluestack-style/react';
import { TD } from '@expo/html-elements';

export default styled(
  TD,
  {
    p: '$3',
  },
  {
    descendantStyle: ['_text'],
  }
);
