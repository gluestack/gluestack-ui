import React from 'react';
import { Svg, Circle as _Circle, Line, Rect } from 'react-native-svg';
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
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <_Circle cx="12" cy="14" r="4" />
      <Line x1="12" y1="6" x2="12.01" y2="6" />
    </Svg>
  );
};
Icon.displayName = 'Speaker';
export const Speaker = React.memo(Icon);
