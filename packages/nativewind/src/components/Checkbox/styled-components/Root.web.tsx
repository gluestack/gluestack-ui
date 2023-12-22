import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Checkbox',
  descendantStyle: ['_icon', '_text', '_indicator'],
} as const);
