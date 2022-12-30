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
      <Line x1="7" y1="7" x2="17" y2="17" />
      <Polyline points="17 7 17 17 7 17" />
    </Svg>
  );
};
Icon.displayName = 'ArrowDownRight';
export const ArrowDownRight = React.memo(Icon);
