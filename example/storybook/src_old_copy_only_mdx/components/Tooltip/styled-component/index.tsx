import { styled } from '@dank-style/react';
import { View } from 'react-native';
const Tooltip = styled(View, {}, {});

export { Tooltip as Root };
export { default as Content } from './Content';
export { default as Arrow } from './Arrow';
export default Tooltip;
