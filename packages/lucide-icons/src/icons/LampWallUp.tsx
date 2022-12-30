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
      <Path d="M11 4h6l3 7H8l3-7Z" />
      <Path d="M14 11v5a2 2 0 0 1-2 2H8" />
      <Path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
    </Svg>
  );
};
Icon.displayName = 'LampWallUp';
export const LampWallUp = React.memo(Icon);
