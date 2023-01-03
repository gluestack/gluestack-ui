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
      <Polyline points="18 8 22 12 18 16" />
      <Polyline points="6 8 2 12 6 16" />
      <Line x1="2" y1="12" x2="22" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'MoveHorizontal';
export const MoveHorizontal = React.memo(Icon);
