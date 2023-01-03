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
      <Line x1="17" y1="7" x2="7" y2="17" />
      <Polyline points="17 17 7 17 7 7" />
    </Svg>
  );
};
Icon.displayName = 'ArrowDownLeft';
export const ArrowDownLeft = React.memo(Icon);
