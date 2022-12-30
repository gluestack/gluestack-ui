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
      <Path d="M11 13h6l3 7H8l3-7Z" />
      <Path d="M14 13V8a2 2 0 0 0-2-2H8" />
      <Path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" />
    </Svg>
  );
};
Icon.displayName = 'LampWallDown';
export const LampWallDown = React.memo(Icon);
