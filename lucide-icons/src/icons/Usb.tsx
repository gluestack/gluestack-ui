import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <_Circle cx="4" cy="20" r="1" />
      <_Circle cx="10" cy="7" r="1" />
      <Path d="M4 20 19 5" />
      <Path d="m21 3-3 1 2 2 1-3Z" />
      <Path d="m10 7-5 5 2 5" />
      <Path d="m10 14 5 2 4-4" />
      <Path d="m18 12 1-1 1 1-1 1-1-1Z" />
    </Svg>
  );
};
Icon.displayName = 'Usb';
export const Usb = React.memo(Icon);
