import { AsForwarder } from '@gluestack-style/react';
import { styled } from '@gluestack-style/react';
const Icon = styled(AsForwarder, {}, {});

export default styled(Icon, {}, {
  componentName: 'RadioIcon',
  ancestorStyle: ['_icon'],
  resolveProps: ['color'],
} as const);
