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
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <Path d="M7.5 8 10 9" />
      <Path d="m14 9 2.5-1" />
      <Path d="M9 10h0" />
      <Path d="M15 10h0" />
    </Svg>
  );
};
Icon.displayName = 'Angry';
export const Angry = React.memo(Icon);
