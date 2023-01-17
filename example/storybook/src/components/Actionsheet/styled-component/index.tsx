import { View } from 'react-native';
import { styled } from '@dank-style/react';

const StyledActionsheet = styled(
  View,
  {
    baseStyle: {
      style: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    },
  },
  {}
);

export { default as StyledActionsheetContent } from './StyledActionsheetContent';
export { default as StyledActionsheetItem } from './StyledActionsheetItem';
export { default as StyledActionsheetItemText } from './StyledActionsheetItemText';
export { default as StyledActionsheetDragIndicator } from './StyledActionsheetDragIndicator';
export { default as StyledActionsheetDragIndicatorWrapper } from './StyledActionsheetIndicatorWrapper';
export { default as StyledActionsheetBackdrop } from './StyledActionsheetBackdrop';
export { StyledActionsheet };
