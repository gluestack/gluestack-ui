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
      <Path d="M10 9a3 3 0 1 0 0 6" />
      <Path d="M2 12h1" />
      <Path d="M14 21V3" />
      <Path d="M10 4V3" />
      <Path d="M10 21v-1" />
      <Path d="m3.64 18.36.7-.7" />
      <Path d="m4.34 6.34-.7-.7" />
      <Path d="M14 12h8" />
      <Path d="m17 4-3 3" />
      <Path d="m14 17 3 3" />
      <Path d="m21 15-3-3 3-3" />
    </Svg>
  );
};
Icon.displayName = 'SunSnow';
export const SunSnow = React.memo(Icon);
