import React from 'react';
import { Svg, Circle as _Circle, Line, Polyline } from 'react-native-svg';
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
      <Polyline points="16 12 12 8 8 12" />
      <Line x1="12" y1="16" x2="12" y2="8" />
    </Svg>
  );
};
Icon.displayName = 'ArrowUpCircle';
export const ArrowUpCircle = React.memo(Icon);
