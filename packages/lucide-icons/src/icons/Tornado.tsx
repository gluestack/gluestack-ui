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
      <Path d="M21 4H3" />
      <Path d="M18 8H6" />
      <Path d="M19 12H9" />
      <Path d="M16 16h-6" />
      <Path d="M11 20H9" />
    </Svg>
  );
};
Icon.displayName = 'Tornado';
export const Tornado = React.memo(Icon);
