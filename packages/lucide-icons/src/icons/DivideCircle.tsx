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
      <Line x1="8" y1="12" x2="16" y2="12" />
      <Line x1="12" y1="16" x2="12" y2="16" />
      <Line x1="12" y1="8" x2="12" y2="8" />
      <_Circle cx="12" cy="12" r="10" />
    </Svg>
  );
};
Icon.displayName = 'DivideCircle';
export const DivideCircle = React.memo(Icon);
