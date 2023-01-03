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
      <Path d="M5 3v16h16" />
      <Path d="m5 19 6-6" />
      <Path d="m2 6 3-3 3 3" />
      <Path d="m18 16 3 3-3 3" />
    </Svg>
  );
};
Icon.displayName = 'Move3d';
export const Move3d = React.memo(Icon);
