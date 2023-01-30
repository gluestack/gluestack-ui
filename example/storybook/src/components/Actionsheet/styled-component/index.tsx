import { View } from 'react-native';
import { styled } from '@dank-style/react';

const Actionsheet = styled(
  View,
  {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  {}
);

export { Actionsheet as Root };
export { default as Backdrop } from './Backdrop';
export { default as Content } from './Content';
export { default as DragIndicator } from './DragIndicator';
export { default as IndicatorWrapper } from './IndicatorWrapper';
export { default as Item } from './Item';
export { default as ItemText } from './ItemText';
export default Actionsheet;
