import React from 'react';
import { Svg, Line, Polyline } from 'react-native-svg';
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
      <Line x1="17" y1="17" x2="7" y2="7" />
      <Polyline points="7 17 7 7 17 7" />
    </Svg>
  );
};
Icon.displayName = 'ArrowUpLeft';
export const ArrowUpLeft = React.memo(Icon);
