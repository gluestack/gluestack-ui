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
      <Path d="m17 3-5 5-5-5h10" />
      <Path d="m17 21-5-5-5 5h10" />
      <Path d="M4 12H2" />
      <Path d="M10 12H8" />
      <Path d="M16 12h-2" />
      <Path d="M22 12h-2" />
    </Svg>
  );
};
Icon.displayName = 'FlipVertical2';
export const FlipVertical2 = React.memo(Icon);
