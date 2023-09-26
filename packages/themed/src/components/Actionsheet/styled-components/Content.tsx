import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';

export default styled(Motion.View, {}, {
  componentName: 'ActionsheetContent',
  descendantStyle: ['_sectionHeaderBackground'],
} as const);
