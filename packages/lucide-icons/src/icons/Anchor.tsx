import React from 'react';
import { Svg, Circle as _Circle, Line, Path } from 'react-native-svg';
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
      <_Circle cx="12" cy="5" r="3" />
      <Line x1="12" y1="22" x2="12" y2="8" />
      <Path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </Svg>
  );
};
Icon.displayName = 'Anchor';
export const Anchor = React.memo(Icon);
