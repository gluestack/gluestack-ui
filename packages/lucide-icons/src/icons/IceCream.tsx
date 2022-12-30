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
      <Path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <Path d="M17 7A5 5 0 0 0 7 7" />
      <Path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </Svg>
  );
};
Icon.displayName = 'IceCream';
export const IceCream = React.memo(Icon);
