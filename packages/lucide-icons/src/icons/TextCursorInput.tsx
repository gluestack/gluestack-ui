import React from 'react';
import { Svg, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M13 20h-1a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1" />
      <Path d="M5 4h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5" />
      <Path d="M13.1 7.9h6.8A2.18 2.18 0 0 1 22 10v4a2.11 2.11 0 0 1-2.1 2.1h-6.8" />
      <Path d="M4.8 16.1h-.7A2.18 2.18 0 0 1 2 14v-4a2.18 2.18 0 0 1 2.1-2.1h.7" />
    </Svg>
  );
};
Icon.displayName = 'TextCursorInput';
export const TextCursorInput = React.memo(Icon);
