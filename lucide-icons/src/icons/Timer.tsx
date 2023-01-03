import React from 'react';
import { Svg, Circle as _Circle, Line } from 'react-native-svg';
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
      <Line x1="10" x2="14" y1="2" y2="2" />
      <Line x1="12" x2="15" y1="14" y2="11" />
      <_Circle cx="12" cy="14" r="8" />
    </Svg>
  );
};
Icon.displayName = 'Timer';
export const Timer = React.memo(Icon);
