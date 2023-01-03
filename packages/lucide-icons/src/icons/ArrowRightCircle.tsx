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
      <Polyline points="12 16 16 12 12 8" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'ArrowRightCircle';
export const ArrowRightCircle = React.memo(Icon);
