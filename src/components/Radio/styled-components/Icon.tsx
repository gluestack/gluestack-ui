import { AsForwarder } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
const Icon = styled(AsForwarder, {}, {});

export default styled(
  Icon,
  {
    h: '$full',
    w: '$full',
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  }
);
