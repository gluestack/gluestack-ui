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
      <Path d="M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3" />
      <Path d="M22 17v2a2 2 0 0 1-2 2H8" />
      <Path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <Path d="M22 17H10" />
    </Svg>
  );
};
Icon.displayName = 'Scroll';
export const Scroll = React.memo(Icon);
