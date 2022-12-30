import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <Path d="M14 12a4 4 0 0 1 0 8H6" />
      <Line x1="4" y1="12" x2="20" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'Strikethrough';
export const Strikethrough = React.memo(Icon);
