import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'ButtonGroup',
  descendantStyle: ['_button', '_groupHSpacer', '_groupVSpacer'],
} as const);
