import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Rect width="8" height="14" x="8" y="6" rx="4" />
      <Path d="m19 7-3 2" />
      <Path d="m5 7 3 2" />
      <Path d="m19 19-3-2" />
      <Path d="m5 19 3-2" />
      <Path d="M20 13h-4" />
      <Path d="M4 13h4" />
      <Path d="m10 4 1 2" />
      <Path d="m14 4-1 2" />
    </Svg>
  );
};
Icon.displayName = 'Bug';
export const Bug = React.memo(Icon);
